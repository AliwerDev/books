import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    background: {
      default: "rgba(238, 238, 238, 1)",
    },
    text: {
      primary: "rgba(11, 11, 11, 1)",
    },
    primary: {
      main: "rgba(20, 102, 140, 1)",
    },
    error: {
      main: "#FE8537",
    },
    secondary: {
      main: "rgba(143, 143, 143, 1)",
    },
  },
  typography: {
    fontFamily: "'Rozha One', serif",
  },
  myShadows: {
    card: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
});

function MainThemeProvider({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          fontFamily: "'Rozha One', serif !important",
          bgcolor: (theme) => theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default MainThemeProvider;
