import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function BasicMenu(props) {
    const pages = props.pages;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (index) => {
        setAnchorEl(null);
        if (!isNaN(index)) {
            props.onPagePicked(index);
        }
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
          >
            <Link style={{
              color: "black",
              textDecoration: "none"
            }} to={"/" + page}>{page}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
