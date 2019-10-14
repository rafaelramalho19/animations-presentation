export default `
const style = {backfaceVisibility: 'visible'};
render(
    <div className="cube__scene showYourFace">
        <div className="cube">
            <div className="cube__face cube__face--front" style={style}>front</div>
            <div className="cube__face cube__face--back" style={style}>back</div>
            <div className="cube__face cube__face--right" style={style}>right</div>
            <div className="cube__face cube__face--left" style={style}>left</div>
            <div className="cube__face cube__face--top" style={style}>top</div>
            <div className="cube__face cube__face--bottom" style={style}>bottom</div>
        </div>
    </div>
);
`