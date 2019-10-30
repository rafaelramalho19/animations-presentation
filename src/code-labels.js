export default `
const balls = [1, 2, 3];
render(<div>{balls.map(id => <div className="ball ball--stagger" key={id}>{id}</div>)}</div>);

onStart(() => {
  const balls = document.querySelectorAll('.ball');

  const timeline = anime.timeline({
    duration: 1000,
    loop: true
  });

  timeline.add({ 
    targets: balls[0],
    translateX: 50
  })
  .add({
    targets: balls[1],
    translateX: 50, 
  }, '-=600')
  .add({
    targets: balls[2],
    translateX: 50, 
  }, 400);
});`