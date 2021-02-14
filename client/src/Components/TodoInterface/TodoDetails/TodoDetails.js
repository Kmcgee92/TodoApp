import React, { useState, useEffect } from "react";

// mui core
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

const TodoDetails = ({ data, classes }) => {
  console.log("what is the data", data);

  const [complete, setComplete] = useState(data.completed || false);
  const [title, setTitle] = useState(data.title || "");
  const [content, setContent] = useState(data.content || "");
  console.log(title)
  console.log(content)
  console.log(complete)
  
  useEffect(() => {
    setComplete(data.completed);
    setTitle(data.title);
    setContent(data.content);
  }, [data]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value)
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
    console.log(e.target.value)
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
          <InputBase
          name="title"
            autoFocus={true}
            className={classes.inputs}
            onChange={(e) => handleTitleChange(e)}
            value={title || ""}
            inputProps={{ "aria-label": "naked" }}
          />
        </Typography>
        <Divider style={{ backgroundColor: "grey", marginBottom: "20px" }} />
        <Typography gutterBottom variant="h6">
          <InputBase
            name="content"
            className={classes.ContentEditable}
            onChange={(e) => handleContentChange(e)}
            value={content || ""}
            inputProps={{ "aria-label": "naked" }}
            />
        </Typography>
      </header>
    </div>
  );
};;

export default TodoDetails;

