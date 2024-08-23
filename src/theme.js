import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFAFA",
    },
    text: {
      primary: "#3A3A49",
    },
  },
  typography: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "42px",
    color: "#3A3A49",
    h6: {
      color: "#25282B",
      fontSize: "1.25rem", // You can adjust the size if needed
      fontWeight: 900,
    },
  },
});

export default theme;
