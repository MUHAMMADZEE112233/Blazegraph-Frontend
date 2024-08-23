import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography } from "@mui/material";

const CustomMenu = ({ label, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="custom-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ color: "#000" }}
      >
        <Typography variant="body1">{label}</Typography>
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="custom-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              item.onClick(); // Trigger the onClick function for the menu item
              handleClose(); // Close the menu after an item is selected
            }}
          >
            {item.text} {/* Display the text of the menu item */}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
