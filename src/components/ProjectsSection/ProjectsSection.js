import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Heading, Box } from "@chakra-ui/react";
import Card from "../Card/Card";
import "./ProjectsSection.css"
const projects = [
  {
    title: "Book shop",
    description: "Booklyn is a design-minded concept shop offering books of all genres and the reading experience",
    link: "https://artibaldios.github.io/Bookshop/",
    getImageSrc: () => require("../../images/bookshop.png"),
  },
  {
    title: "Travelling",
    description: "Travel together is design-minded concept site to travel as a group with others. ",
    link: "https://artibaldios.github.io/travel-together/",
    getImageSrc: () => require("../../images/travel.png"),
  },
  {
    title: "TaS blog",
    description:"My first demo project. The TaS is a SPA about science and technolgies as a blog",
    link: "https://artibaldios.github.io/TaS3/",
    getImageSrc: () => require("../../images/TaS.png"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#212121"
      isDarkBackground
      p={8}
      spacing={8}
    >
    <Heading as="h1" id="projects-section">Pet Projects</Heading>
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          link={project.link}
        />
      ))}
    </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
