import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:artibaldios@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Artibaldios",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/artibaldios/",
  },
  {
    icon: faInstagram,
    url: "https://medium.com",
  },
];

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const boxScrollRef = useRef(null);
  useEffect(()=>{

    const handleScroll = (e) => {
      setScroll(e.currentTarget.scrollY);
      if(scroll < e.currentTarget.scrollY){
        boxScrollRef.current.style.transform = 'translateY(-300px)';
      } else {
        boxScrollRef.current.style.transform = 'translateY(0)';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[scroll])

  return (
    <Box
      ref={boxScrollRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#212121"
      zIndex={100}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <nav className="nav-box">
          <Box className="nav-icons">
            {socials.map((link) => (
              <a key={link.url} href={link.url}><FontAwesomeIcon icon={link.icon} size={`2x`} style={{ marginLeft: 25 }} /></a>
            )
            )}
          </Box>
          <Box>
            <HStack spacing={8}>
              <CustomLink href={`/#home`} path={"home"} title={"Home"}></CustomLink>
              <CustomLink href={`/#projects`} path={"projects"} title={"Projects"}></CustomLink>
              <CustomLink href={`/#contact-me`} path={"contactme"} title={"Contact me"}></CustomLink>
            </HStack>
          </Box>
        </nav>
      </Box>
    </Box>
  );
};
export default Header;
