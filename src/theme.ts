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
          base: "md",
        },
        color: "gray.400"
      },
    }
  },
  shadows: {
    outline: '0 0 0 0px',
  }
});

export default theme;