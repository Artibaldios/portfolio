import React from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import AnimatedJellyBlob from "../AnimatedJellyBlob/AnimatedJellyBlob";
import CreepingLine from "../CreepingLine/CreepingLine";
import "./LandingSection.css"

const greeting = "Hello, I'm Artyom Borisevich!";
const bio = "A frontend developer";

const LandingSection = () => (
  <>
    <HStack
      backgroundColor="#fff"
      alignItems="center"
      justifyContent="space-between"
      minHeight="84vh"
      id="home-section"
    >
      <AnimatedJellyBlob />
      <VStack>
        <Heading className="landing-heading" as="h1" size="2xl">{greeting}</Heading>
        <Heading className="landing-heading" as="h1" size="2xl">{bio}</Heading>
      </VStack>
    </HStack>
    <CreepingLine />
  </>

);

export default LandingSection;
