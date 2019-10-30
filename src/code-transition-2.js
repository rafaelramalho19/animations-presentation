export default `
const css = \`
    .cool-list-item {
        opacity: 0;
        height: 0;
        transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out;
    }

    .cool-list-item.show {
        opacity: 1;
        height: 52px;
    }
\`;

render(<div><style>{css}</style><CoolList/></div>);`