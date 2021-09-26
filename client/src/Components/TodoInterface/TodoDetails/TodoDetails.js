import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateTodos } from "../../../redux/actions/userTodoActions";
// apollo
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_ITEM } from "../../../graphql/mutations/updateItem";

// mui core
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TodoDetails = ({ classes, saving, setSaving }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.activeUser.id);
  const todoList = useSelector((state) => state.todos);
  const activeTodo = useSelector((state) => state.active);
  const [activeData, setActiveData] = useState({});
  const [complete, setComplete] = useState(activeData.completed || false);
  const [title, setTitle] = useState(activeData.title || "ADD TITLE");
  const [content, setContent] = useState(activeData.content || "");

  // eslint-disable-next-line
  let [saveData, { _data, _loading, _error }] = useMutation(UPDATE_ITEM);

  useEffect(() => {
    if (activeTodo) {
      const [filtered] = todoList.filter((object) => {
        return Number(object.id) === activeTodo;
      });
      setActiveData(filtered);
    }
  }, [todoList, activeTodo]);

  useEffect(() => {
    setComplete(activeData.completed);
    setTitle(activeData.title);
    setContent(activeData.content);
  }, [activeData]);

  const handleSave = async (e) => {
    setSaving(true);
    let completeFlag = complete;
    const target = e.target.innerHTML;
    if (target === "Incomplete" || target === "Complete") {
      setComplete(!complete);
      completeFlag = !complete;
    }
    await saveData({
      variables: {
        itemId: activeData.id,
        title: title || "ADD TITLE",
        content: content,
        completed: completeFlag !== "undefined" ? completeFlag : complete,
      },
    });
    const newTodo = {
      completed: completeFlag !== "undefined" ? completeFlag : complete,
      title: title || "ADD TITLE",
      content: content,
      id: activeData.id,
      userId: userId,
      __typename: "Item",
    };
    dispatch(updateTodos(newTodo));
  };

  const handleSetTitle = (e) => {
    setSaving(false);
    if (e.target.value.length < 80) {
      setTitle(e.target.value);
    } else return null;
  };
  const handleSetContent = (e) => {
    setSaving(false);
    setContent(e.target.value);
  };
  return (
    <div className={classes.detailContent}>
      <header className={classes.itemStatus}>
        {complete ? (
          <Button onClick={(e) => handleSave(e)} className={classes.complete}>
            Complete
          </Button>
        ) : (
          <Button onClick={(e) => handleSave(e)} className={classes.inComplete}>
            Incomplete
          </Button>
        )}
      </header>
      <Typography gutterBottom variant="h6">
        <InputBase
          name="title"
          autoComplete="off"
          autoFocus={true}
          className={classes.titleEditable}
          onChange={(e) => handleSetTitle(e)}
          onBlur={(e) => handleSave(e)}
          value={title || ""}
          inputProps={{ "aria-label": "naked" }}
        />
      </Typography>
      <Divider style={{ backgroundColor: "grey", marginBottom: "20px" }} />
      <Typography gutterBottom variant="h6">
        <TextField
          multiline={true}
          rows={30}
          InputProps={{
            className: classes.contentEditable,
            disableUnderline: true,
          }}
          autoComplete="off"
          name="content"
          fullWidth={true}
          onChange={(e) => handleSetContent(e)}
          onBlur={(e) => handleSave(e)}
          value={content || ""}
          inputProps={{ "aria-label": "naked" }}
        />
      </Typography>
    </div>
  );
};;

export default TodoDetails;

