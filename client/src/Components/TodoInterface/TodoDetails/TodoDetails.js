import React, { useState, useEffect } from "react";

// mui core
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

const TodoDetails = ({ data, active, classes }) => {
  const [complete, setComplete] = useState(false);
  const [activeTodo, setActiveTodo] = useState({ title: "title" });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [current] = data.filter((item) => item.id === active);

  useEffect(() => {
    setComplete(current.status);
    setActiveTodo(current);
    setTitle(current.title);
  }, [current]);

  console.log(activeTodo.title);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = (e) => {
    console.log("saved");
  };
  return (
    <div>
      <header>
        {complete ? (
          <div style={{ color: "lightgreen", filter: "saturate(4)" }}>
            Complete
          </div>
        ) : (
          <div style={{ color: "darkred", filter: "saturate(10)" }}>
            Incomplete
          </div>
        )}
        <Typography gutterBottom variant="h6">
          {/* <input placeholder={activeTodo.title}></input> */}
          <InputBase
            className={classes.inputs}
            onBlur={handleSave()}
            onChange={(e) => handleOnChange(e)}
            value={title}
            inputProps={{ "aria-label": "naked" }}
          />
        </Typography>
      </header>
      <Divider style={{ backgroundColor: "grey", marginBottom: "20px" }} />
      <Typography paragraph>{activeTodo.content}</Typography>
    </div>
  );
};

export default TodoDetails;
