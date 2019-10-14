import React from "react";

const NUM_CONFETTI = 350;
const COLORS = [
  [85, 71, 106],
  [174, 61, 99],
  [219, 56, 83],
  [244, 92, 68],
  [248, 182, 70]
];
const PI_2 = 2 * Math.PI;

const range = (a, b) => (b - a) * Math.random() + a;

let xpos = 0.5;

class Confetti {
  constructor(width, height, context) {
    this.width = width;
    this.height = height;
    this.context = context;
    this.style = COLORS[~~range(0, 5)];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace();
  }

  replace() {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, this.width - this.r2);
    this.y = range(-20, this.height - this.r2);
    this.xmax = this.width - this.r;
    this.ymax = this.height - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    this.vy = 0.7 * this.r + range(-1, 1);
  }

  drawCircle(x, y, r, style) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, PI_2, false);
    this.context.fillStyle = style;
    this.context.fill();
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.ymax) {
      this.replace();
    }
    if (0 < this.x < this.xmax) {
      this.x = (this.x + this.xmax) % this.xmax;
    } else {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    this.drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
  }
}

export default class Confetties extends React.Component {
  constructor() {
    super();

    this.canvasRef = React.createRef();
    this.confetties = [];
  }

  animate = () => {
    try {
        requestAnimationFrame(this.animate);
        this.context = this.canvasRef.current.getContext('2d');
        this.context.clearRect(0, 0, this.width, this.height);
        for (let confetti of this.confetties) {
            confetti.draw();
        }
    }
    catch(e) {}
  };

  componentDidMount() {
    this.width = this.canvasRef.current.width = this.canvasRef.current.clientWidth;
    this.height = this.canvasRef.current.height = this.canvasRef.current.clientHeight;
    this.context = this.canvasRef.current.getContext("2d");

    for (let i = 0; i < NUM_CONFETTI; i++) {
      this.confetties.push(new Confetti(this.width, this.height, this.context));
    }

    this.animate();
  }

  handleMouseMove = (ev) => {
    xpos = ev.pageX / this.width;
  }

  render() {
    return (
      <>
        <canvas
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
            }}
            ref={this.canvasRef}
            onMouseMove={this.handleMouseMove}
        ></canvas>
      </>
    );
  }
}
