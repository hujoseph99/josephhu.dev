import "@fontsource/poppins";

import * as React from "react"
import {
  ChakraProvider
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import theme from "./theme";
import { Hero } from "./components/sections/Hero";


export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher /> */}
    <Hero />
  </ChakraProvider>
)
