
import Particles from "react-tsparticles";


export default function ParticlesBackground() {
  

  return (
    <Particles
      id="tsparticles"
      
      options={{
        fullScreen: { enable: false }, // prevent fullscreen override
        background: { color: "#121212" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" }
          }
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // Make sure it's behind everything else
      }}
    />
  );
}
