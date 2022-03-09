import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MainThemeProvider from "./Theme/ThemeContext";

function App() {
  return (
    <MainThemeProvider>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </MainThemeProvider>
  );
}

export default App;
