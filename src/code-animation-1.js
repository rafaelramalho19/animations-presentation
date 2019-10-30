export default `
const css = \`
    .cool-list-item {
       animation: 0.5s appear ease-in-out both;
    }

    @keyframes appear {
        from {
            opacity: 0;
            height: 0;
        }
        to {
            opacity: 1;
            height: 52px;
        }
    }
\`;

render(<div><style>{css}</style><CoolList/></div>);`