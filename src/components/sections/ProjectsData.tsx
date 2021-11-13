import * as React from 'react';

import { GridItem, SimpleGrid, Text } from '@chakra-ui/layout';

import HighlightText from '../common/HighlightText';
import DevRacerIllustration from '../../assets/devracer.png';
import SudokuIllustration from '../../assets/sudoku.png';
import Bullet from '../common/Bullet';
import { SVGNameType } from '../svgs/SVGs';

interface LinksType {
  icon: SVGNameType;
  link: string;
}

interface ProjectDataType {
  title: string;
  body: React.ReactNode[];
  links: LinksType[];
  image: string;
};

const projectData: ProjectDataType[] = [
  {
    title: 'DevRacer',
    body: [
      <Text>
        An online <HighlightText text="multiplayer" /> typing game inspired by Typeracer made 
        for developers. Type popular code snippets from different languages and race against 
        your friends!
      </Text>,
      <Text>
        This is a <HighlightText text="full-stack web app" /> that is built using the following
        technologies:
      </Text>,
      <SimpleGrid
        columns={[1, 2]}
        spacingY={1}
      >
        <GridItem><Bullet text="React" /></GridItem>
        <GridItem><Bullet text="Go" /></GridItem>
        <GridItem><Bullet text="MongoDB" /></GridItem>
        <GridItem><Bullet text="OAuth" /></GridItem>
        <GridItem><Bullet text="GraphQL" /></GridItem>
        <GridItem><Bullet text="Websockets" /></GridItem>
      </SimpleGrid>
    ],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/hujoseph99/devracer'
      },
      {
        icon: 'external',
        link: 'https://hujoseph99.github.io/devracer/#/'
      }
    ],
    image: DevRacerIllustration
  },
  {
    title: 'Sudoku',
    body: [
      <Text>
        A simple sudoku web app that served as my introductory project to web development. 
        It is a completely frontend app which is built on <HighlightText text="React" /> and 
        <HighlightText text=" Bootstrap" />. The game 
        itself supports various features such as:
      </Text>,
      <SimpleGrid
        columns={[1, 2]}
        spacingY={1}
      >
        <GridItem><Bullet text="Note Taking" /></GridItem>
        <GridItem><Bullet text="Custom difficulties" /></GridItem>
        <GridItem><Bullet text="Hints" /></GridItem>
        <GridItem><Bullet text="Solver" /></GridItem>
      </SimpleGrid>
    ],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/hujoseph99/sudoku'
      },
      {
        icon: 'external',
        link: 'https://hujoseph99.github.io/sudoku/'
      }
    ],
    image: SudokuIllustration
  },
  {
    title: 'Sistering Scheduler',
    body: [
      <Text>
        I am currently working as a <HighlightText text='senior developer' /> on the
        <HighlightText text=' Sistering' /> team at <HighlightText text='UW Blueprint' /> — a 
        student-run initiative to help build tech solutions for non-profits. I will be leveraging my
        experience to mentor juniors and influence the direction of the product.
      </Text>,
      <Text>
        This will be a <HighlightText text='full-stack web app' /> incorporating:
      </Text>,
      <SimpleGrid
        columns={[1, 2]}
        spacingY={1}
      >
        <GridItem><Bullet text="React" /></GridItem>
        <GridItem><Bullet text="Node" /></GridItem>
        <GridItem><Bullet text="Typescript" /></GridItem>
        <GridItem><Bullet text="PostgreSQL" /></GridItem>
        <GridItem><Bullet text="GraphQL" /></GridItem>
        <GridItem><Bullet text="Firebase" /></GridItem>
      </SimpleGrid>
    ],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/uwblueprint/sistering'
      },
    ],
    image: SudokuIllustration
  },
  
];

export default projectData;


