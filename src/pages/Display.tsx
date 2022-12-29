import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeSlice,
  deleteTodoSlice,
  updateTodoSlice,
} from "../features/TodoInfo";
import TodoList from "../components/TodoList/TodoList";
import InputField from "../components/InputField/InputField";
import uniqid from "uniqid";
import { RootState } from "../core/store";
import Paper from "@material-ui/core/Paper";

const Display = () => {
  const todos = useSelector((state: RootState) => state.todo.val);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleChangeSlice(id));
  };

  const handleEnterEdit = (e: any) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const handleEdit = (e: any, id: number) => {
    if (e.target.textContent === "") {
      handleDelete(id);
    } else {
      const editedTodo = {
        id: id,
        task: e.target.textContent,
      };
      dispatch(updateTodoSlice(editedTodo));
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodoSlice(id));
  };

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "white",
          height: "100vh",
          marginLeft: "12px",
          marginBottom: "15ox",
          marginRight: "12px",
          marginTop: "13px",
        }}
      >
        <InputField />
        {todos.map((todoItem) => (
          <>
            <TodoList
              key={uniqid()}
              todo={todoItem}
              handleToggle={handleToggle}
              handleEdit={handleEdit}
              handleEnterEdit={handleEnterEdit}
              handleDelete={handleDelete}
            />
          </>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default Display;
