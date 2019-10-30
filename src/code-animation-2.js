export default `const css = \`
    .opo {
        animation: best-conference-in-porto 5s ease-in-out infinite;
    }

    @keyframes best-conference-in-porto {
        0% {
            transform: translate3d(0,0,0);
            opacity: 1;
        }

        20% {
            transform: translate3d(-500px, 0, 0);
            filter: blur(20px);
            opacity: 0;
        }

        40% {
            transform: translate3d(0, 50px, 0);
            filter: blur(0);
        }

        100% {
            transform: translate3d(0, 0, 0);
        }
    }
\`;

render(<div><style>{css}</style><img className="opo" src="/assets/opojs.svg"/></div>);`