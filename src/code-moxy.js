export default `
render(<object className="moxy-logo" type="image/svg+xml" data="./assets/moxy.svg" style={{ opacity: 0 }}></object>);

onStart(() => {
  const logo = document.querySelector('.moxy-logo');
  const letters = logo.contentDocument.querySelectorAll('.letters path');

  anime({
    targets: Array.from(letters),
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2019,
    direction: 'alternate',
    begin: (anim) => logo.style.opacity = 1,
    loop: true
  });
}, 1000);`