import "@fontsource/poppins";

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme";
import { Hero } from "./components/sections/Hero";
import 'animate.css';
import AboutMe from "./components/sections/AboutMe";


export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher /> */}
    <Hero />
    <AboutMe />
  </ChakraProvider>
)
