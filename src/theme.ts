import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
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
  },
});

export default theme;