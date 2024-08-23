import SettingsIcon from "@mui/icons-material/Settings";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ArticleIcon from "@mui/icons-material/Article";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const NavLinks = [
  {
    label: "Settings",
    icon: <SettingsIcon />,
    route: "/settings",
  },
  {
    label: "Upload",
    icon: <FileUploadIcon />,
    route: "/upload",
  },
  {
    label: "Namespace",
    icon: <ArticleIcon />,
    route: "/send-email",
  },
  {
    label: "Sparql",
    icon: <LightbulbIcon />,
    route: "/drafts",
  },
];

export default NavLinks;
