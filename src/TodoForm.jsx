import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListItem>
        <TextField
          fullWidth
          id="todo-input"
          label="Add Todo"
          variant="outlined"
          value={text}
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="add todo"
                    edge="end"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    <CreateIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </ListItem>
    </form>
  );
}
