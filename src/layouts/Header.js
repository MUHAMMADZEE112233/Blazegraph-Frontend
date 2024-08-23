import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useLocation } from "react-router-dom";
import navLinks from "../core/routes/NavLinks";
import "./Layout.css";
import CustomMenu from "../components/CustomMenu";

const Header = ({ userName, userAvatar }) => {
  const location = useLocation();
  const currentNavLabel =
    navLinks.find((link) => link.route === location.pathname)?.label ||
    "Dashboard";

  const menuItems = [
    {
      text: "Profile",
      label: "profile",
      onClick: () => alert("Profile clicked"),
    },
    {
      text: "Settings",
      label: "settings",
      onClick: () => alert("Settings clicked"),
    },
    { text: "Logout", label: "logout", onClick: () => alert("Logout clicked") },
  ];
  return (
    <AppBar
      position="fixed"
      className="app-bar"
      sx={{
        backgroundColor: "transparent",
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ marginLeft: "240px" }}>
        <Typography variant="h6" className="nav-label">
          {currentNavLabel}
        </Typography>
        <div className="spacer"></div>
        <div className="profile-section">
          {/* Custom Menu component */}
          <CustomMenu label="한국어" menuItems={menuItems} />
          {/* Divider next to the avatar */}
          <Divider
            orientation="vertical"
            flexItem
            className="vertical-divider"
          />
          {userAvatar ? (
            <Avatar alt={userName} src={userAvatar} className="avatar" />
          ) : (
            <div className="icon-and-name">
              <PersonOutlineOutlinedIcon className="profile-icon" />
              <Typography variant="body1" className="user-name">
                {userName}
              </Typography>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
