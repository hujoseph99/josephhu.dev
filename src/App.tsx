import * as React from "react"
import "@fontsource/poppins";
import 'animate.css';

import { ChakraProvider } from "@chakra-ui/react"
import { Hero } from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Experience from "./components/sections/Experience";

import theme from "./theme";
import Projects from "./components/sections/Projects";
import NextSteps from "./components/sections/NextSteps";
import Navbar from "./components/common/navbar/Navbar";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <NextSteps />
</ChakraProvider>
)
