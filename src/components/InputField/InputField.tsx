import { TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { add } from "../../features/TodoInfo";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export const InputField = () => {
  const dispatch = useDispatch();
  const [comptask, setcomptask] = useState<string>("");
  const [changetaskError, setchangetaskError] = useState<boolean>(false);

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setchangetaskError(true);
    } else {
      setchangetaskError(false);
    }

    event.preventDefault();
    setcomptask(event.target.value);
  };

  const anyInputFieldEmpty = () => {
    var result = false;

    if (comptask === "") {
      setchangetaskError(true);
      result = true;
    } else {
      setchangetaskError(false);
    }
    return result;
  };

  const onSubmitClick = (e: any) => {
    e.preventDefault();
    const newItem = {
      description: comptask,
      id: uniqid(),
      isTaskCompleted: false,
    };
    dispatch(add(newItem));

    setcomptask("");
  };
  return (
    <>
      <br />
      <Typography variant="h6" className="heading">
        <h1>Todo App</h1>
      </Typography>
      <Box display="flex">
        <TextField
          required
          variant="outlined"
          name="task"
          value={comptask}
          onChange={changeName}
          helperText={
            changetaskError ? " task is not allowed to be empty!" : ""
          }
          error={changetaskError}
        />

        <Fab
          aria-label="add"
          onClick={(e) => {
            if (!anyInputFieldEmpty()) {
              onSubmitClick(e);
            }
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export default InputField;
