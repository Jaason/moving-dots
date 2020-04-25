import React, { useEffect } from "react";

const MovingDots = () => {
  let dots = {
    nb: 250,
    distance: 100,
    d_radius: 150,
    array: []
  };


  const dot = (ctx: CanvasRenderingContext2D, coordinates: any) => {
    ctx.beginPath();
    ctx.fillStyle = 'red'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }


  const createDots = () => {
    for(i = 0; i < dots.nb; i++){
        dots.array.push(new Dot());
      }
  }

  const createBoard = () => {
    const canvas = document.getElementById("stage") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    // Run! Like go get some data from an API.
    createBoard();
  }, []);

  return <p>lorem ipsum</p>;
};

export default MovingDots;
