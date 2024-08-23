import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import hikeLab from "../assets/hikeLab.webp";
import "./Layout.css";
import { useLocation, useNavigate } from "react-router-dom";
import navLinks from "../core/routes/NavLinks";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(
    navLinks.findIndex((link) => link.route === location.pathname)
  );

  const handleNavigation = (route, index) => {
    setSelectedIndex(index);
    navigate(route);
  };

  return (
    <Drawer variant="persistent" anchor="left" open={true} className="drawer">
      <Toolbar className="toolbar">
        <img src={hikeLab} alt="Hike Lab Logo" className="logo" />
        <Typography variant="h6" className="brand-name">
          Hike Lab
        </Typography>
      </Toolbar>
      <List className="nav-links">
        {navLinks.map((link, index) => (
          <ListItem
            button
            key={index}
            selected={selectedIndex === index}
            onClick={() => handleNavigation(link.route, index)}
            className={`nav-item ${selectedIndex === index ? "selected" : ""}`}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (route) => {
//     navigate(route);
//   };
//   return (
//     <Drawer variant="persistent" anchor="left" open={true} className="drawer">
//       <Toolbar className="toolbar">
//         <img src={hikeLab} alt="Hike Lab Logo" className="logo" />
//         <Typography variant="h6" className="brand-name">
//           Hike Lab
//         </Typography>
//       </Toolbar>
//       <List className="nav-links">
//         {navLinks.map((link, index) => (
//           <ListItem
//             button
//             key={index}
//             onClick={() => handleNavigation(link.route)}
//           >
//             <ListItemIcon style={{ color: "#a4a6b3" }}>
//               {link.icon}
//             </ListItemIcon>
//             <ListItemText primary={link.label} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
