
import React from "react";
import "./CustomLink.css";

const CustomLink = (props) => {
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <a
      className="custom-link"
      href={props.href}
      onClick={handleClick(props.path)}
    >
      {props.title}
    </a>
  );
};
export default CustomLink;
