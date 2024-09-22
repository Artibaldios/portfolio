import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import CustomLink from "../CustomLink/CustomLink";
import React from "react";
import "./Card.css"

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Box className="card-wrapper">
      <VStack className="card-box">
        <Image src={imageSrc} alt={title} className="card-box-image" />
        <Box className="card-article-info">
          <Heading size="md">{title}</Heading>
          <Text className="card-box-description" >{description}</Text>
          <CustomLink href={link} title={"Check"}></CustomLink>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
