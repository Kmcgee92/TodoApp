import React, { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../redux/actions/activeActions";
import { removeFromList } from "../../../redux/actions/userTodoActions";
// Apollo
import { useMutation } from "@apollo/react-hooks";
import { DELETE_ITEM } from "../../../graphql/mutations/deleteItem";

//mui icons
import DeleteIcon from "@material-ui/icons/Delete";

const Delete = ({ classes }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active);
  const [deleteItem, { data, loading, error }] = useMutation(DELETE_ITEM);
  useEffect(() => {});

  const handleDelete = async () => {
    if (active) {
      const deletedItem = await deleteItem({
        variables: {
          itemId: active,
        },
      });
      console.log(deletedItem);
      dispatch(removeFromList(deletedItem.data.DeleteItem.id));
      dispatch(setActive(""));
    }
  };

  return (
    <div>
      <DeleteIcon onClick={handleDelete} className={classes.icon} />
    </div>
  );
};

export default Delete;
