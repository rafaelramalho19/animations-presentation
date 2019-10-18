export default `
const balls = [1, 2, 3, 4];
render(<div>{balls.map(id => <div className="ball ball--stagger">{id}</div>)}</div>);

setTimeout(() => {
  anime({
    targets: '.ball',
    translateX: anime.stagger([0, 150]),
    rotate: anime.stagger([-360, 360]),
    delay: anime.stagger(100),
    loop: true,
    easing: 'easeInOutQuad'
  })
}, 100);`