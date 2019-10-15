export default `
const balls = [1, 2, 3, 4];
render(<div>{balls.map(id => <div className="ball ball--stagger" key={id}>{id}</div>)}</div>);

setTimeout(() => {
  const timeline = new TimelineMax({ repeat: -1 });
  const balls = ".ball";

  timeline
    .set(balls, {
      x: 0,
    })
    .add('balls-started-moving')
    .staggerTo(balls, 2, {
        x: 150
    }, 0.3)
    .add('balls-stopped-moving');

    // Very complex computing here
    const dontLookAtThis = ( o_o) => console.log( o_o);
    dontLookAtThis(1);
    // Just joking

    timeline.to(balls, 1, {
        y: 100
    }, 'balls-stopped-moving')
    .to(balls, 1, {
        rotation: 90
    }, 'balls-started-moving');
}, 100);`