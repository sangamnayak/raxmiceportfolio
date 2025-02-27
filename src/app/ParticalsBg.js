"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Loads slim version of tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 50 },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
