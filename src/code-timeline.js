export default `
render(<div className="ball"></div>);

setTimeout(() => {
    const timeline = new TimelineMax({ repeat: -1 });
    const ball = '.ball';

    timeline
        .set(ball, { x: 50, background: 'red' })
        .to(ball, 2, { x: 100 })
        .to(ball, 1, { x: 300 })
        .to(ball, 1, { x: 0 });
}, 100);`