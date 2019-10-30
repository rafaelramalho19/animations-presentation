export default `
render(<div className="ball"></div>);

onStart(() => {
    anime({
        targets: document.querySelector('.ball'),
        duration: 2000,
        translateX: 200,
        loop: true,
    });
});`