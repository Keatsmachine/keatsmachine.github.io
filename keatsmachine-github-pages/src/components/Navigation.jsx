import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BasicMenu from "./BasicMenu";
import { useLocation } from "react-router-dom";

function Navigation(props) {
  let location = useLocation();
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: "black",
          color: "white",
        }}
      >
        <BasicMenu pages={props.pages} onPagePicked={props.onPagePicked} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {location.pathname.replaceAll("%20", " ").replaceAll("/", "")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;