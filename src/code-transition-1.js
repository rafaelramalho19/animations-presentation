export default `
const css = \`
    .ball {
        transition: transform 0.3s ease-in-out;
        will-change: transform;
    }

    .ball:hover {
        transform: scale3d(1.2, 1.2, 1);
    }

    .ball:not(:hover) {
    }
\`;

render(<div className="ball"><style>{css}</style></div>);`