import "@fontsource/poppins";

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme";
import { Hero } from "./components/sections/Hero";
import 'animate.css';
import AboutMe from "./components/sections/AboutMe";
import Experience from "./components/sections/Experience";

import { Box, Flex } from '@chakra-ui/layout'
import Projects from "./components/sections/Projects";
import NextSteps from "./components/sections/NextSteps";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <NextSteps />
</ChakraProvider>
)
