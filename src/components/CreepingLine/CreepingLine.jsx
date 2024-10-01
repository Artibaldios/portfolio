import React from 'react';
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
    return (
        <div className="creeping-line">
            <div className="creeping-images">
                {images.map((icon, index) => (
                    <FontAwesomeIcon key={index} icon={icon.icon} style={{ color: "#ff30ff" }} className="creeping-image" />
                ))}
            </div>
            <div className="creeping-images-second">
                {images.map((icon, index) => (
                    <FontAwesomeIcon key={`dup-${index}`} icon={icon.icon} style={{ color: "#ff30ff" }} className="creeping-image" />
                ))}
            </div>
        </div>
    );
};

export default CreepingImageLine;