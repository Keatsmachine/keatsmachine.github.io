import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BasicMenu from "./BasicMenu";

function Navigation(props) {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: "black",
          color: "white"
        }}
      >
        <BasicMenu pages={props.pages} onPagePicked={props.onPagePicked} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.heading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;