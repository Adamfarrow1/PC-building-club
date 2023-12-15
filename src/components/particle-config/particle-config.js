import { useCallback } from "react";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import logo from './Color_Gear_Logo-removebg-preview (1).svg'

const Design = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
      }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
    // Listen for window resize events and update the scale
    window.addEventListener("resize", updateScale);
    updateScale();
    // Cleanup the event listener on component unmount
    return () => {
      if(window.innerHeight > 500) return
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const [scale, setScale] = useState(1.4);
  const [dots, setDots] = useState(120);
  const [radius, setRadius] = useState(120);

  const updateRadius = () =>{
    if(window.innerWidth < 800) return setRadius(60);
    if(window.innerWidth < 800) return setRadius(90);
    
    return setRadius(250)
  }

  const updateDots = () =>{
    if(window.innerWidth < 500) return setDots(20);
    if(window.innerWidth < 800) return setDots(70);
    return setDots(120)
  }

  const updateScale = () =>{
    updateDots();
    updateRadius();
    if(window.innerWidth < 500) return setScale(.6);
    if(window.innerWidth < 800) return setScale(.9);

    return setScale(1.4)
  }
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
        distance: 70,
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
        value: dots
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
        value: 2,
        random: true,
      },
    },
    polygon: {
        
    inline: {
        arrangement: "equidistant", // Ensure one particle per SVG point
        },
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.8)",
        lineWidth: 1,
        width: 10
      },
      enable: true,
      move: {
        
        radius: radius
        
      },
      scale: scale,
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
        fullScreen:{enable:false,zIndex:-1},
        enable: false,
      },
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: false,
        zIndex: -1,
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
      fullScreen: { enable: false }
  };
  return (
    <div className="w-full">
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