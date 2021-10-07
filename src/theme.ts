import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "poppins",
    body: "poppins"
  },
  styles: {
    global: {
      p: {
        fontSize: {
          base: "sm",
        },
        color: "gray.400"
      },
    }
  }
});

export default theme;