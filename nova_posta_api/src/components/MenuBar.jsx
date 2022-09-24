import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { useSelector } from "react-redux";
import AppDrawer from "./AppDrawer";

export default function MenuBar({ onChangeMode }) {
  const [checked, setChecked] = useState(false);
  
  const title = useSelector((state) => state.title.title);

  function handleChange(event) {
    let checked = event.target.checked;
    setChecked(checked);
    onChangeMode(checked);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            checked={checked}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
