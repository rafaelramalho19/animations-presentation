export default `
render(<object class="moxy-logo" type="image/svg+xml" data="./assets/moxy.svg" style={{ opacity: 0 }}></object>);

const getPathSize = (element) => parseInt(element.getTotalLength(), 10);

setTimeout(() => {
  const timeline = new TimelineMax({ repeat: -1 });
  const logo = document.querySelector('.moxy-logo');
  const letters = logo.contentDocument.querySelectorAll('.letters > path');

  letters.forEach(letter => {
    const letterPathSize = getPathSize(letter);
    timeline
      .set(logo, { opacity: 1 })
      .set(letter, {
        attr: { 
          'stroke-dasharray': \`\${letterPathSize} \${letterPathSize}\`, 
          'stroke-dashoffset':  letterPathSize }
      })
  });

  timeline.staggerTo(letters, 2, {
    attr: { 'stroke-dashoffset': 30 }
  }, 0.25);
}, 1000);`