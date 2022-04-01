import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Roboto Regular, sans-serif",
    body: "Roboto Regular, sans-serif",
    mono: "Roboto Regular, sans-serif",
    button: "Roboto Regular, sans-serif",
  },

  colors: {
    primary: "#027AFE",
    red: "#FF0100",
    redBright: "#FFBAB9",
    gray: "#737C8A",
    grayBright: "#F5F6FA",
    green: "#39D778",
  },

  styles: {
    global: () => ({
      body: {
        bgColor: "var(--chakra-colors-primary)",
        padding: "40px 70px 40px 70px",
      },
    }),
  },
});

export default theme;
