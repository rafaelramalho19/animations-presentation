export default `
render(<div className="ball"></div>);

setTimeout(() => {
    window.TweenMax.to('.ball', 2, {
        x: 200
    });
}, 100);`