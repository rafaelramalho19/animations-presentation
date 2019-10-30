export default `
render(<div className="ball" style={{ transform: 'translateX(10px)' }}>Ball</div>);

onStart(() => {
    anime({
        targets: '.ball',
        translateX: {
            value: '*=15',
            duration: 3000
        },
        rotate: {
            value: '+=2turn',
            duration: 3500,
        },
        easing: 'easeInOutSine',
        loop: true,
    });
});`