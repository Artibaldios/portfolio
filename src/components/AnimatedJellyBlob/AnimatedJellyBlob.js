import React, { useRef, useEffect } from 'react';
import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";
import "./AnimatedJellyBlob.css"
import { Image, Box } from "@chakra-ui/react";
import photo from "../../images/photo.jpg";

const AnimatedJellyBlob = () => {
  const pathRef = useRef(null);

  let hueNoiseOffset = 0;
  let noiseStep = 0.002;

  const simplex = new SimplexNoise();
  const points = createPoints();

  useEffect(() => {
    const animate = () => {
      pathRef.current.setAttribute("d", spline(points, 1, true));

      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

        const x = map(nX, -1, 1, point.originX - 15, point.originX + 15);
        const y = map(nY, -1, 1, point.originY - 15, point.originY + 15);

        point.x = x;
        point.y = y;

        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      hueNoiseOffset += noiseStep / 6;

      requestAnimationFrame(animate);
    };

    animate();

  }, [points]);

  function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  function noise(x, y) {
    return simplex.noise2D(x, y);
  }

  function createPoints() {
    const points = [];
    const numPoints = 6;
    const angleStep = (Math.PI * 2) / numPoints;
    const rad = 200;

    for (let i = 1; i <= numPoints; i++) {
      const theta = i * angleStep;

      const x = 220 + Math.cos(theta) * rad;
      const y = 220 + Math.sin(theta) * rad;

      points.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000
      });
    }

    return points;
  }

  return (
    <div className="animated-component-box">
      <Box>
          <Image
            className="landing-image"
            name="Artyom"
            borderRadius='full'
            boxSize='250px'
            src={photo}
          />
        </Box>
      <svg>
        <path ref={pathRef} stroke="url(#gradient)" />
      </svg>
    </div>
  );
};

export default AnimatedJellyBlob;