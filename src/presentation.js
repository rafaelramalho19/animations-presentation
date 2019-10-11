// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Link,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import './main.css';

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#000",
    secondary: "#fff",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.handleTimelineClick = this.handleTimelineClick.bind(this);

    this.state = { activeTimelineItems: [] };
  }

  handleTimelineClick(index) {
    const { activeTimelineItems } = this.state;

    const previousIndex = activeTimelineItems.indexOf(index);
  
    if (previousIndex === -1) {
      activeTimelineItems.push(index);
    } else {
      activeTimelineItems.splice(previousIndex, 1);
    }

    console.log(this.state);

    this.setState({ activeTimelineItems });
  }

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Animations
          </Heading>
          <br />
          <br />
          <Image height="40vh" src="./assets/rafael-ramalho.jpg"></Image>
          <br />

          <Heading size={4} textColor="tertiary">
            Rafael Ramalho
          </Heading>
          <Heading size={6} textColor="quaternary">
            Software Developer @ MOXY
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem>Performance 101</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Canvas</ListItem>
            <ListItem>WebGL</ListItem>
            <ListItem>Web animations API</ListItem>
            <ListItem>External animations libraries </ListItem>
            <ListItem>Demo time <span role="img" aria-label="demo girls">👯</span></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
            Performance 101 - The pixel pipeline
          </Heading>
          

          <br></br>
          <br></br>

          <div className="timeline">
            <div className={"step " + (this.state.activeTimelineItems.indexOf('0') !== -1)} onClick={() => this.handleTimelineClick('0')}>
              <span>Javascript</span>
            </div>
            <span class="arrow">➡</span>
            <div className={"step " + (this.state.activeTimelineItems.indexOf('1') !== -1)} onClick={() => this.handleTimelineClick('1')}>
              <span>Style</span>
            </div>
            <span class="arrow">➡</span>
            <div className={"step " + (this.state.activeTimelineItems.indexOf('2') !== -1)} onClick={() => this.handleTimelineClick('2')}>
              <span>Layout</span>
            </div>
            <span class="arrow">➡</span>
            <div className={"step " + (this.state.activeTimelineItems.indexOf('3') !== -1)} onClick={() => this.handleTimelineClick('3')}>
              <span>Paint</span>
            </div>
            <span class="arrow">➡</span>
            <div className={"step " + (this.state.activeTimelineItems.indexOf('4') !== -1)} onClick={() => this.handleTimelineClick('4')}>
              <span>Composite</span>
            </div>
          </div>

          <Notes>
            <b>Javascript ->-> Composite </b>
            <p>EG: If you change a layout property (width, height, left, top...) the browser needs to check other elements and "reflow" the page. </p>

            ---

            <b>Javascript -> skip Layout -> Composite </b>
            <p>If you changed a paint only property, like a background image, text color, or shadows, then the browser skips layout, but it will still do paint.</p>

            --

            <b>Javascript -> skip Layout & Paint -> Composite </b>
            <p>Compositing is where the painted parts of the page are put together for displaying on screen.</p>
          </Notes>

          <br></br>
          <br></br>
          
          <Link href="https://developers.google.com/web/fundamentals/performance/rendering" target="_blank">More info</Link>
        </Slide>
      </Deck>
    );
  }
}
