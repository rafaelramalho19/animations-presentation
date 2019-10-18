export default `
render(<div className="ball" style={{ transform: 'translateX(10px)' }}>Ball</div>);

setTimeout(() => {
    anime({
        targets: '.ball',
        translateX: {
            value: '*=15',
            duration: 3000
        },
        rotate: {
            value: '+=2turn',
            direction: 3500,
        },
        easing: 'easeInOutSine',
        loop: true,
    });
}, 100);`