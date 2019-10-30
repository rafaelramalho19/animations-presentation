export default `
const balls = [1, 2, 3, 4];
render(<div>{balls.map(id => <div className="ball ball--stagger" key={id}>{id}</div>)}</div>);

onStart(() => {
  anime({
    targets: '.ball',
    translateX: 270,
    delay: anime.stagger(100),
    loop: true,
    easing: 'easeInOutQuad'
  });
});`