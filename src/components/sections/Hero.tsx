import React, { useState } from "react";

import { GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { useMediaQuery, Box } from "@chakra-ui/react";

import HighlightText from "../common/HighlightText";
import Button from "../common/Button";
import SectionContainer from "../common/SectionContainer";
import SVGs from "../svgs/SVGs.tsx";

export const Hero = () => {
  const [isLarge] = useMediaQuery("(min-width: 62em)");
  const [hovering, setHovering] = useState(false);

  return (
    <SectionContainer isPrimary isFullScreen id="hero">
      <SimpleGrid width="100%" height="100%" columns={[1, null, null, 2]}>
        <GridItem colSpan={[1, null, null, 2]} />
        <GridItem
          colSpan={1}
          display="flex"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="center"
          maxWidth="40rem"
        >
          <Text>👋 Hi, my name is</Text>
          <Text
            color="cyan"
            fontSize={["5xl", null, null, "7xl"]}
            fontWeight="extrabold"
            lineHeight={1}
            mt={2}
          >
            Joseph Hu.
          </Text>
          <Text
            color="gray.50"
            fontSize={["4xl", null, null, "5xl"]}
            fontWeight="normal"
            lineHeight={1}
            mt={4}
          >
            I'm a software developer.
          </Text>
          <Text mt={4}>
            I enjoy building exceptional software solutions for tough problems.
            Currently, I'm a fourth-year computer science student working as a
            software engineering intern at
            <HighlightText text=" Databricks" />.
          </Text>
          <Button
            mt={12}
            text="Check out my resume!"
            onClick={() => window.open("./JosephHuResume.pdf")}
          />
        </GridItem>
        {isLarge && (
          <GridItem
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              maxWidth="32rem"
              maxHeight="32rem"
              transform="rotate(180deg)"
            >
              <SVGs name="avatar_blob" />
            </Box>
            <Box
              position="absolute"
              width="100%"
              height="100%"
              maxWidth="15rem"
              maxHeight="15rem"
              mb="3rem"
            >
              <SVGs name="avatar" />
            </Box>
          </GridItem>
        )}
        <GridItem
          colSpan={[1, null, null, 2]}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Box
            width="2rem"
            height="4rem"
            display="flex"
            justifyContent="center"
            borderColor="cyan"
            borderWidth={2}
            borderRadius={20}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Box
              className={
                hovering
                  ? "animate__animated animate__fadeOutDown animate__infinite animate__slow"
                  : ""
              }
              width="1rem"
              height="1rem"
              bgColor="cyan"
              borderRadius={20}
              marginTop={2}
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </SectionContainer>
  );
};

