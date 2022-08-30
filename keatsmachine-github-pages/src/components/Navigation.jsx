import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BasicMenu from "./BasicMenu";
import { useLocation } from "react-router-dom";
import validRoutes from "../contexts/ValidRoutes.js";

function Navigation() {
  const validTitles = validRoutes;
  const location = useLocation();

  const getTitle = (currentPath, validLocations) => {
    const titleObject = validLocations.find((titleObject) => {
      return "/" + titleObject.url === currentPath;
    });
    return titleObject ? titleObject.title : "";
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: "black",
          color: "white",
        }}
      >
        <BasicMenu/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {getTitle(location.pathname, validTitles)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;