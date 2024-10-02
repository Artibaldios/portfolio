import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faJs,
    faReact,
    faGithub,
    faDocker,
    faFigma,
    faNode,
    faGitlab,
    faSass,
    faNpm
} from "@fortawesome/free-brands-svg-icons";
import './CreepingLine.css';

const images = [
    { icon: faCss3Alt },
    { icon: faHtml5 },
    { icon: faJs },
    { icon: faReact },
    { icon: faGithub },
    { icon: faDocker },
    { icon: faFigma },
    { icon: faNode },
    { icon: faGitlab },
    { icon: faSass },
    { icon: faNpm }
]

const CreepingImageLine = () => {
    useEffect(() => {
        const container = document.querySelector(`.marquee`);
        const slide = document.querySelector(`.marquee-content`);
        const cloneSlide = slide.cloneNode(true);
        container.appendChild(cloneSlide);
      }, []);
    return (
        <div className="marquee">
            <ul className="marquee-content">
                {images.map((icon, index) => (
                    <li key={index} className="creeping-image">
                        <FontAwesomeIcon key={index} icon={icon.icon} style={{ color: "#ff30ff" }}  />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreepingImageLine;