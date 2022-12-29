import React from "react";
import Todo from "../../interfaces/TodoInterface";
import { FC } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

interface props {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleEdit: (e: any, id: number) => void;
  handleEnterEdit: (e: any) => void;
  handleToggle: (id: number) => void;
}

const TodoList: FC<props> = (props) => {
  const { todo, handleDelete, handleEdit, handleEnterEdit, handleToggle } =
    props;

  return (
    <React.Fragment>
      <List>
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => handleDelete(todo?.id)}>
              <HighlightOffRoundedIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                onClick={() => handleToggle(todo.id)}
                edge="start"
                checked={todo.isTaskCompleted ? true : false}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              className={todo.isTaskCompleted ? "checked" : ""}
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEdit(e, todo.id)}
              onKeyDown={(e) => handleEnterEdit(e)}
              primary={todo.description}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default TodoList;
