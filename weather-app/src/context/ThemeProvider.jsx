// themes.js
import { createTheme } from "@mui/material/styles";

// Svetli režim
export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

// Tamni režim
export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#47434378",
    },
  },
});
