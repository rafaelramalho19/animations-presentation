export default `class WebAnimationAPI extends React.Component {
    constructor() {
        super();
        this.element = React.createRef();
    }

    componentDidMount() {
        const animation = this.element.current.animate([
            { transform: 'rotate(0deg)', offset: 0 },
            { transform: 'rotate(-12deg)', offset: .08 },
            { transform: 'rotate(270deg)', offset: .3 },
            { transform: 'rotate(-40deg) translateX(-250px)', offset: .55 },
            { transform: 'rotate(-13deg) translateX(500px)', offset: .92 },
            { transform: 'rotate(-40deg)', offset: 1 }
          ], {
            duration: 3000,
            iterations: Infinity,
            easing: 'linear',
            fill: 'both',
            delay: 0
          });

        // animation.playbackRate = '1.0';
        window.animation = animation;
    }

    render() {
        return (<div ref={this.element} className="webAnimationAPI"></div>);
    }

}
render(<WebAnimationAPI/>);
`