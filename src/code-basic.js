export default `
render(<div className="ball"></div>);

setTimeout(() => {
    anime({
        targets: document.querySelector('.ball'),
        duration: 2000,
        translateX: [0, 200],
        loop: true,
    });
}, 100);`