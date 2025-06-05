import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0a9396", // --dark-cyan
    },
    secondary: {
      main: "#94d2bdff", // --tiffany-blue
    },
    accent: {
      main: "#ca6702ff", // --alloy-orange
    },
    background: {
      default: "#001219ff",
    },
  },
  typography: {
    fontFamily: "var(--body-font)",
    h1: {
      fontFamily: "var(--heading-font)",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--heading-font)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--heading-font)",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--heading-font)",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--heading-font)",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "var(--heading-font)",
      fontWeight: 500,
    },
    button: {
      fontFamily: "var(--heading-font)",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "8px 16px",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});
