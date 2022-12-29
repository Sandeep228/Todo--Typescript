import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f7f8fa",
      light: "#ffffff",
    },
    secondary: {
      main: "#fea03c",
    },
    background: {
      default: " #7e57c2",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.heading": {
            backgroundColor: "#7e57c2",
            color: "white",
            textAlign: "center",
            padding: "0px",
            margin: "12px",
          },
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "red",
    //       paddingBottom: "20px",
    //       height: "600px",
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginLeft: "34%",
          marginBottom: "2%",
          width: "30%",
          borderRadius: "8px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "blue",
          color: "white",
          margin: "14px",
          fontSize: "1rem",
          width: 150,
          alignSelf: "center",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "#7e57c2",
          color: "red",
          marginLeft: "4px",
          "&:hover": {
            backgroundColor: deepPurple[500],
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
          marginTop: 2,
          marginBottom: 6,
          width: 750,
          margin: "auto",
          borderRadius: "16px",
          fontWeight: "bold",
          boxShadow: "2px 2px 3px grey",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "&.checked": {
            textDecoration: "line-through",
            color: "black",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "grey",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "grey",
            color: "red",
          },
        },
      },
    },
  },
});
