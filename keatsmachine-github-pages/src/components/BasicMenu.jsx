import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import validRoutes from "../contexts/ValidRoutes.js"

export default function BasicMenu() {
    const pages = validRoutes.filter((route) => { return route.showInMenu });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
      <IconButton
        id="basic-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {pages.map((page, index) => (
          <MenuItem
            key={index}
            id={index}
            onClick={() => {
              handleClose(index);
            }}
            sx={{
              padding: "0px"
            }}
          >
            <Link style={{
              color: "black",
              textDecoration: "none",
              flex: "auto",
              padding: "5px"
            }} to={"/" + page.url}>{page.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
