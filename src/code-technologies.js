export default `
render(<TechnologiesList hidden/>);

setTimeout(() => {
  const technologies = document.querySelectorAll('.technology');
  const offset = 3;

  const timeline = anime.timeline({
    loop: true,
    easing: 'linear',
    duration: 1000,
  })
  .set(technologies, {
    translateY: (_, index) => \`\${index * 100}%\`,
  });

  technologies.forEach((technology, index) => 
      timeline.add({
        targets: technologies,
        translateY: '-=100%',
      }, index * 1000)
      .add({
        targets: technology,
        translateY: \`+=\${(technologies.length - 1) * 100}%\`,
        duration: 0,
        endDelay: 1000,
      }, index * 1000)
  );
}, 1000);`