import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "poppins",
    body: "poppins"
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.900"
      },
      h1: {
        fontSize: {
          base: "2xl",
          lg: "3xl"
        }
      },
      h2: {
        fontSize: {
          base: "3xl",
          lg: "4xl"
        }
      },
      p: {
        fontSize: {
          base: "sm",
          lg: "md"
        },
        color: "gray.400"
      },
    }
  }
});

export default theme;

//   colors: {
//     "gray": {
//       "50": "#F2F2F2",
//       "100": "#DBDBDB",
//       "200": "#C4C4C4",
//       "300": "#ADADAD",
//       "400": "#969696",
//       "500": "#808080",
//       "600": "#666666",
//       "700": "#4D4D4D",
//       "800": "#333333",
//       "900": "#1A1A1A"
//     },
//     "cyan": {
//       "50": "#E6FFFD",
//       "100": "#B9FEF9",
//       "200": "#8CFDF4",
//       "300": "#5FFCF0",
//       "400": "#32FBEC",
//       "500": "#05FAE8",
//       "600": "#04C8BA",
//       "700": "#03968B",
//       "800": "#02645D",
//       "900": "#01322E"
//     },
//     "teal": {
//       "50": "#EDF7F7",
//       "100": "#CDEAE8",
//       "200": "#ADDCDA",
//       "300": "#8DCECB",
//       "400": "#6CC1BD",
//       "500": "#4CB3AE",
//       "600": "#3D8F8C",
//       "700": "#2E6B69",
//       "800": "#1E4846",
//       "900": "#0F2423"
//     }
//   }
