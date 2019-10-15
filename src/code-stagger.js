export default `
const balls = [1, 2, 3, 4];
render(<div>{balls.map(id => <div className="ball ball--stagger">{id}</div>)}</div>);

setTimeout(() => {
  const timeline = new TimelineMax({ repeat: -1 });
  const balls = ".ball";

  timeline
    .set(balls, {
      x: 0,
    })
    .staggerTo(balls, 2, {
        x: 150
    }, 0.3)
    .to(balls, 1, {
        y: 100
    }, '-=2')
    .to(balls, 1, {
        rotation: 90
    }, '-=3');
}, 100);`