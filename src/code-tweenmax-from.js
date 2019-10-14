export default `
render(<div className="ball"></div>);

setTimeout(() => {
    window.TweenMax.from('.ball', 2, {
        x: 200
    });
}, 100);`