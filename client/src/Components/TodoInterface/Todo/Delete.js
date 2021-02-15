import React, { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../redux/actions/activeActions";
import { removeFromList } from "../../../redux/actions/userTodoActions";
// Apollo
import { useMutation } from "@apollo/react-hooks";
import { DELETE_ITEM } from "../../../graphql/mutations/deleteItem";

// mui core
import CircularProgress from '@material-ui/core/CircularProgress';
//mui icons
import DeleteIcon from "@material-ui/icons/Delete";

const Delete = ({ classes }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active);
  const [deleteItem, { data, loading, error }] = useMutation(DELETE_ITEM);
  useEffect(() => {
    if (!loading) {
      dispatch(setActive(""));
    }
  }, [dispatch, data, loading]);

  const handleDelete = async () => {
    if (active) {
      const deletedItem = await deleteItem({
        variables: {
          itemId: active,
        },
      });
      dispatch(removeFromList(deletedItem.data.DeleteItem.id));
    }
  };
  if (loading)
    return (
      <DeleteIcon
        style={{ color: "grey" }}
        onClick={handleDelete}
        disabled={true}
      />
    );
  return (
    <div>
      <DeleteIcon onClick={handleDelete} className={classes.icon} />
    </div>
  );
};

export default Delete;
