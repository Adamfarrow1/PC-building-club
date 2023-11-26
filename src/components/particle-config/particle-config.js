import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import logo from './knights_Logo.svg'

const Design = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
      }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 100
          }
        }
      },
      modes: {
        bubble: {
          distance: 80,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 100,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 10
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
    collisions: {
        enable: true,
        bounds: "canvas", // Restrict particles to the boundaries of the canvas
        },
      color: {
        value: [ "#ffc908", "#BA9B37"]
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 60,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: .5,
      },
      number: {
        limit: 0,
        value: 120
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: {
          min: 0.1,
          max: 0.6
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1, // Adjust the particle size as needed
        random: true, // Allow for some randomness in particle size
      },
    },
    polygon: {
        
    inline: {
        arrangement: "equidistant", // Ensure one particle per SVG point
        },
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.8)",
        lineWidth: 1
      },
      enable: true,
      move: {
        
        radius: 10
        
      },
      scale: 2,
      type: "inline",
      url: logo,
    },
    background: {
        color: {
          value: "rgb(12, 12, 12)",
        },
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "rgb(12, 12, 12)",
          },
          opacity: 1,
        },
        fullScreen:{enable:true,zIndex:-1},
        enable: false,
      },
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      detectRetina: false,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onDiv: {
            selectors: "#repulse-div",
            enable: false,
            mode: "repulse",
            type: "circle",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 40,
            duration: 2,
            mix: false,
            opacity: 8,
            size: 6,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 1,
            radius: 0,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
        },
      },
  };
  return (
    <div className="canvas">
      <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        
      />
    </div>
  );
};

export default Design;

// mode: "grab",
// grab: {
//   distance: 300,
//   line_linked: {
//     opacity: 0.5,
//   },
// },