export default `
render(<div className="ball"></div>);

setTimeout(() => {
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
        loop: true,
        targets: '.ball',
      });
      
    timeline
      .add({ translateX: 250 })
      .add({ translateY: -30 })
      .add({ translateX: 0 })
      .add({ translateY: 0 })
}, 100);`