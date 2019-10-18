export default `
render(<div><div className="ball"></div><input step=".001" type="range" min="0" max="100" value="0"/>
<div className="play">PLAY</div><div className="pause">PAUSE</div><div className="restart">RESTART</div></div>);

setTimeout(() => {
    const progressControl = document.querySelector('input[type="range"]');
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
        loop: true,
        targets: '.ball',
        update: () => progressControl.value = timeline.progress
      });
      
    timeline.add({ translateX: 250 }).add({ translateY: -30 }).add({ translateX: 0 }).add({ translateY: 0 })
    
    document.querySelector('.play').onclick = timeline.play;
    document.querySelector('.pause').onclick = timeline.pause;
    document.querySelector('.restart').onclick = timeline.restart;

    progressControl.addEventListener('input', () => timeline.seek(timeline.duration * (progressControl.value / 100)));
}, 100);`