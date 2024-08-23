import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/Layout";
import Settings from "./pages/Settings";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Upload from "./pages/Upload";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS and apply global styles */}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="upload" element={<Upload />} />
              <Route path="send-email" element={<Dashboard />} />
              <Route path="drafts" element={<Dashboard />} />
              {/* Add more routes as needed */}
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
