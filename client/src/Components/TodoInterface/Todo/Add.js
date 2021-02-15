import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../../../redux/actions/userTodoActions";
import { setActive } from "../../../redux/actions/activeActions";
// Apollo
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ITEM } from "../../../graphql/mutations/createItem";

//mui icons
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const Add = ({ classes }) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.auth.activeUser);
  // eslint-disable-next-line
  const [createItem, { _data, _error, _loading }] = useMutation(CREATE_ITEM);

  const handleAdd = async () => {
    const newItem = await createItem({
      variables: {
        userId: activeUser.id,
        title: " ",
        content: " ",
      },
    });
    dispatch(addToList(newItem.data.CreateItem));
    dispatch(setActive(newItem.data.CreateItem.id));
  };
  return (
    <div>
      <NoteAddIcon onClick={handleAdd} className={classes.icon} />
    </div>
  );
};

export default Add;
