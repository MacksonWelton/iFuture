import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "default": "#fafafa"
    },
    "primary": {
      "light": "rgba(232, 34, 46, 0.5)",
      "main": "rgba(232, 34, 46, 1)",
      "dark": "rgba(235, 0, 14, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(238, 238, 238, 1)",
      "main": "rgba(184, 184, 184, 1)",
      "dark": "rgba(184, 184, 184, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
});
