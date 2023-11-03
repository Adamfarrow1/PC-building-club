import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const Canvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const stars = useRef([]);
  let ctx;


  var FPS = 60, // Frames per second
      x = 200, // Number of stars
      connected = 0,
      md = 350,
      sd = 100,
      dotvisibility = 200,
      mouseConnections = 60,
      ga = 1;
 

  const updateValues = () => {
    let FPS, x, connected, md, sd, dotvisibility, mouseConnections, ga;
    if (window.innerWidth >= 1600) {
      FPS = 5;
      x = 600;
      connected = 0;
      md = 350;
      sd = 400;
      dotvisibility = 800;
      mouseConnections = 60;
      ga = 1;
    } else if (window.innerWidth >= 1300) {
      FPS = 0;
      x = 350;
      connected = 0;
      ga = 1;
      md = 250;
      sd = 400;
      dotvisibility = 500;
      mouseConnections = 60;
    } else {
      FPS = 90;
      x = 200;
      connected = 0;
      ga = 1;
      md = 0;
      sd = 0;
      dotvisibility = 400;
      mouseConnections = 0;
    }
  };


  const { innerWidth: width, innerHeight: height } = window;

  const start = () => {
    stars.current = [];
    for (let i = 0; i < x; i++) {
      stars.current.push({
        x: Math.random() * canvasRef.current.width,
        y: Math.random() * canvasRef.current.height,
        radius: Math.random() * 1.5 + 1.2,
        fps: Math.random() * 40 + 37,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }
  };

  const draw = () => {

    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight; // Cover the entire page height
    }

  
    
    if (stars.current.length === 0) start();
    if (canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  
    ctx.globalAlpha = 1;
    for (let i = 0; i < stars.current.length; i++) {
      const s = stars.current[i];
    //   if (distance(mouse.current, s) > dotvisibility) continue;
    //   else 
    // if (distance(mouse.current, s) > 200) {
    //     const fade = (distance(mouse.current, s) - dotvisibility) / 1000;
    //     ctx.globalAlpha = Math.abs(Math.round(fade * 100) / 100);
    //   } else {
    //     ctx.globalAlpha = 1;
    //   }
      if (i % 3 !== 0) ctx.fillStyle = 'white';
      else ctx.fillStyle = '#ffc908';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.globalAlpha = 1;
    for (let i = 0; i < stars.current.length; i++) {
      stars.current[i].connected = 0;
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#a590dfd3';
    redrawLines();
    ctx.stroke();
  };

  const redrawLines = () => {
    for (let i = 0; i < stars.current.length; i++) {
      ctx.beginPath();
      const starI = stars.current[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance(mouse.current, starI) < mouseConnections) {
        stars.current[i].connected++;
        // ctx.lineTo(mouse.current.x, mouse.current.y);
        ctx.stroke();
      }
      for (let j = 0; j < stars.current.length; j++) {
        if (distance(stars.current[i], stars.current[j]) > 80) continue;
        if (distance(mouse.current, starI) > md) continue;
        const starII = stars.current[j];
        if (
          distance(starI, starII) < md &&
          stars.current[i].connected !== 10 &&
          stars.current[j].connected !== 10
        ) {
          stars.current[i].connected++;
          stars.current[j].connected++;
          const fade1 = (md - distance(mouse.current, starI)) / 1000;
          const fade2 = (md - distance(mouse.current, starII)) / 1000;
          const fade = Math.min(fade1, fade2);
          ctx.strokeStyle = `rgba(165, 144, 223, ${Math.abs(
            Math.round(fade * 1000) / 1000
          )}`;
        //   ctx.lineTo(starII.x, starII.y);
          ctx.stroke();
          ctx.strokeStyle = 'rgb(165, 144, 223)';
        }
      }
      ctx.globalAlpha = 1;
    }
  };

  const distance = (point1, point2) => {
    const xs = (point2.x - point1.x) ** 2;
    const ys = (point2.y - point1.y) ** 2;
    return Math.sqrt(xs + ys);
  };

  const update = () => {
    for (let i = 0; i < stars.current.length; i++) {
      const s = stars.current[i];
      s.x += s.vx / s.fps;
      s.y += s.vy / s.fps;
      if (s.x < 0 || s.x > window.innerWidth) s.vx = -s.vx;
      if (s.y < 0 || s.y > window.innerHeight) s.vy = -s.vy;
    }
  };

  // const handleMouseMove = (e) => {
  //   mouse.current.x = e.clientX;
  //   mouse.current.y = e.clientY;
  // };

  // useEffect(() => {
  //   canvasRef.current.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     canvasRef.current.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    canvasRef.current.width = window.innerWidth - scrollbarWidth;
    canvasRef.current.height = window.innerHeight;
    const canvas = canvasRef.current;
 
    
    ctx = canvas.getContext('2d');
    updateValues();
    start();
    draw();
    update();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      canvasRef.current.width = window.innerWidth - scrollbarWidth;
      canvasRef.current.height = window.innerHeight;
      const e = window.event;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      stars.current = [];
      updateValues();
      start();
      draw();
      update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const animate = () => {
    draw();
    update();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);
  const location = useLocation(); // Get the current route location

  const isProjectsPage = location.pathname === '/projects'; 
  const canvasStyle = {
    overflow: 'hidden',
    background: 'black',
    position: isProjectsPage ? 'fixed' : 'absolute', // Apply 'fixed' on Projects page
    zIndex: '-1',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  };
  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default Canvas;
