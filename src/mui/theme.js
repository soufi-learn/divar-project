import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    divar: {
      main: "#A72727",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#888888",
    },
  },
  typography: {
    fontFamily: ["vazir", "Roboto", "Arial"].join(","),
    h1: {
      fontSize: "3rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.25rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.875rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: "normal",
      fontWeight: 400,
    },
  },
});

export default theme;
