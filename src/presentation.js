// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Link,
  Notes,
  Text
} from "spectacle";

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import anime from 'animejs';


// Import theme
import createTheme from "spectacle/lib/themes/default";
import './main.css';

// Code section
import LayerCode from './code-layer';
import CodeCube from "./code-cube";
import CodeWebAnimations from "./code-webanimations";
import Confetties from './confetti';
import CoolList from './cool-list';
import TechnologiesList from './technologies-list';

import CodeBasic from './code-basic';
import codeBasicFrom from "./code-basic-from";
import codeTimeline from "./code-timeline";
import codeTimelineControl from "./code-timeline-control";
import codeStagger from "./code-stagger";
import codeLabels from "./code-labels";
import codeMoxy from "./code-moxy";
import codeStaggerStepped from "./code-stagger-stepped";
import codeTransition1 from "./code-transition-1";
import codeTransition2 from "./code-transition-2";
import codeAnimation1 from "./code-animation-1";
import codeAnimation2 from "./code-animation-2";
import codeTechnologies from "./code-technologies";


// Require CSS
require("normalize.css");

window.anime = anime;
window.CoolList = CoolList;
window.TechnologiesList = TechnologiesList;
window.onStart = (cb, time = 100) => setTimeout.call(null, cb, time);

const theme = createTheme(
  {
    primary: "#060409",
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

    this.compositeVideoRef = React.createRef();

    this.state = { disabledTimelineItems: ['1', '2', '3', '4'] };
  }

  handleTimelineClick(index) {
    const { disabledTimelineItems } = this.state;

    const previousIndex = disabledTimelineItems.indexOf(index);
  
    if (previousIndex === -1) {
      disabledTimelineItems.push(index);
    } else {
      disabledTimelineItems.splice(previousIndex, 1);
    }

    this.setState({ disabledTimelineItems });
  }

  handleCompositeVideoHover() {
    this.compositeVideoRef.current.play();
  }

  animateThankYou = () => {
    const logo = document.querySelector('.thankyou');
    const letters = logo.contentDocument.querySelectorAll('path');

    anime({
      targets: Array.from(letters),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 4000,
      begin: () => logo.style.opacity = 1,
      complete: () => document.querySelectorAll('.website').forEach(website => website.classList.add('active'))
    });
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
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
            Performance 101 - The pixel pipeline
          </Heading>

          <br></br>
          <br></br>

          <div className="timeline">
            <div className={"step " + (this.state.disabledTimelineItems.indexOf('0') !== -1)} onClick={() => this.handleTimelineClick('0')}>
              <span>Javascript</span>
            </div>
            <span className="arrow">➡</span>
            <div className={"step " + (this.state.disabledTimelineItems.indexOf('1') !== -1)} onClick={() => this.handleTimelineClick('1')}>
              <span>Style</span>
            </div>
            <span className="arrow">➡</span>
            <div className={"step " + (this.state.disabledTimelineItems.indexOf('2') !== -1)} onClick={() => this.handleTimelineClick('2')}>
              <span>Layout</span>
            </div>
            <span className="arrow">➡</span>
            <div className={"step " + (this.state.disabledTimelineItems.indexOf('3') !== -1)} onClick={() => this.handleTimelineClick('3')}>
              <span>Paint</span>
            </div>
            <span className="arrow">➡</span>
            <div className={"step " + (this.state.disabledTimelineItems.indexOf('4') !== -1)} onClick={() => this.handleTimelineClick('4')}>
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

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Performance 101 - Promoting to a composite layer
          </Heading>

          <CodePane lang="javascript" source={ LayerCode } theme="dark"></CodePane>

          <div className="promoted" onMouseEnter={ () => this.handleCompositeVideoHover() }>
            <video ref={this.compositeVideoRef} className="promoted-video" src="./assets/catty.mp4"></video>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Performance 101 - Optimizing 3d layers
          </Heading>
          <br></br>
          <br></br>

          <Text textColor="secondary" textSize="24"textAlign="left">Every layer you create requires memory and management, and that’s not free.</Text>
          <br></br>

          <Text textColor="secondary" textSize="24" textAlign="left">Avoid promoting lots of elements to composite layers.</Text>
          <br></br>

          <Text textColor="secondary" textSize="24" textAlign="left">Whenever you're not using a 3D animation with rotation, you can improve rendering in Safari and Chrome with:</Text>
          <br></br>          
          <CodePane source="backface-visibility: hidden" theme="dark"></CodePane>
          <br></br>
        </Slide>

        <Slide transition={['fade', 'zoom']}>
          <LiveProvider code={ CodeCube } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
            }}/>
            <br></br>
            <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textColor="secondary">
              What are my options for web animations?
          </Heading>

          <List bulletStyle="star">
            <br/>
            <ListItem>CSS</ListItem>
            <br/>
            <ListItem>Canvas</ListItem>
            <br/>
            <ListItem>WebGL</ListItem>
            <br/>
            <ListItem>Web Animations API</ListItem>
            <br/>
            <ListItem>External libs</ListItem>
          </List>

          <a href="https://css-tricks.com/comparison-animation-technologies/">More info at Sarah Drasner post</a> 
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              CSS
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Pros:
          </Heading>

          <List>
            <ListItem>Cross-browser compatible and available everywhere</ListItem>
            <br/>
            <ListItem>Excellent performance.</ListItem>
          </List>

          <div className="cssAnimation">
            <div className="fakeMenu">
              <div className="fakeButtons fakeClose"></div>
              <div className="fakeButtons fakeMinimize"></div>
              <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
              <p className="line1">$ npm i awesome-css-animations<span className="cursor1">_</span></p>
              <p className="line2">Success<span className="cursor2">_</span></p>
            </div>
          </div>

        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              CSS
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Cons:
          </Heading>

          <List>
            <ListItem textSize="30">The Bézier easings don't allow for more advanced customization.</ListItem>
            <br/>
            <ListItem textSize="30">Animations with several steps are overwhelming.</ListItem>
            <br/>
            <ListItem textSize="30">Animating SVGs with CSS has cross-browser problems.</ListItem>
            <br/>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeTransition1 } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: '16px'
            }}/>
            <br></br>
            <LiveError></LiveError>
            <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeTransition2 } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: '14px'
            }}/>
            <br></br>
            <LiveError></LiveError>
            <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeAnimation1 } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: '14px'
            }}/>
            <br></br>
            <LiveError></LiveError>
            <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeAnimation2 } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: '14px'
            }}/>
            <br></br>
            <LiveError></LiveError>
            <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
            Canvas
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
            Pros:
          </Heading>

          <List>
            <ListItem textSize="30">Great performance even with complex simultaneous animations.</ListItem>
            <br/>
            <ListItem textSize="30">Controlled by JavaScript, which provides access to more user interface methods.</ListItem>
            <br/>
          </List>
        </Slide>

        <Slide>
          <Confetties></Confetties>
          <span className="float-label">Source: <a href="https://codepen.io/linrock/pen/Amdhr">https://codepen.io/linrock/pen/Amdhr</a></span>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              Canvas
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Problems:
          </Heading>

          <List>
            <ListItem textSize="30">Resizing with browser width and screen display can be complex.</ListItem>
            <br/>
            <ListItem textSize="30">Difficult to debug.</ListItem>
            <br/>
            <ListItem textSize="30">Development takes longer.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
            WebGL
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
            Features:
          </Heading>

          <List>
            <ListItem textSize="30">Amazing performance (Hardware-accelerated).</ListItem>
            <br/>
            <ListItem textSize="30">Support for 3D and VR.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              WebGL
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Problems:
          </Heading>

          <List>
            <ListItem textSize="30">Resizing with browser width and screen display can be complex.</ListItem>
            <br/>
            <ListItem textSize="30">Difficult to debug.</ListItem>
            <br/>
            <ListItem textSize="30">Development takes longer.</ListItem>
            <br/>
            <ListItem textSize="30">Hard for designers to export assets (need extra work with 3D models)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
            Web Animations API
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
            Pros:
          </Heading>

          <List>
            <ListItem textSize="30">Good performance.</ListItem>
            <br/>
            <ListItem textSize="30">Easy and legible sequencing.</ListItem>
            <br/>
            <ListItem textSize="30">Closes the gap between javascript and css.</ListItem>
            <br/>
          </List>

        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ CodeWebAnimations } noInline={true}>
            <LiveEditor  style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: '1.4vh',
            }}/>
            <br></br>
            <LiveError></LiveError>
            <LivePreview />
          </LiveProvider>
          <Notes>
            <p>
            window.animation.pause();
            window.animation.play();
            window.animation.finish();
            window.animation.cancel();
            </p>
          </Notes>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              Web Animations API
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Cons:
          </Heading>

          <List>
            <ListItem textSize="30">Support cross-browser is not great.</ListItem>
            <Image height="30vh" src="./assets/web-animations-coverage.png"/>
            <br/>
            <ListItem textSize="30">Has limitations regarding complex sequences.</ListItem>
          </List>
          
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              External libs (Anime.js)
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Pros:
          </Heading>

          <List>
            <ListItem textSize="28">Very easy to debug and read sequential code.</ListItem><br/>
            <ListItem textSize="28">Nice features regarding timeline manipulation (speeding up/down, shifting animations backwards and forward in time, etc.).</ListItem><br/>
            <ListItem textSize="28">Offers an extended list of default easings and even custom ones.</ListItem><br/>
            <ListItem textSize="28">Allows to create advanced motion animations with small amounts of code.</ListItem><br/>
          </List>

        </Slide>

        <Slide transition={['fade']}>
          <Heading size={5} textAlign="left" textColor="secondary">
              External libs (Anime.js)
          </Heading>
          <br/>

          <Heading size={6} textColor="secondary">
              Cons:
          </Heading>

          <List>
            <ListItem textSize="30">Since it’s an external library, you have to consider that there’s additional request associated with adding this to your website (usually 6kb gzipped).</ListItem>
            <br/>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ CodeBasic } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeBasicFrom } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeStagger } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeStaggerStepped } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeTimeline } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeTimelineControl } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 13,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeLabels } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <LiveProvider code={ codeMoxy } noInline={true}>
              <LiveEditor  style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}/>
              <br></br>
              <LiveError/>
              <LivePreview />
          </LiveProvider>
        </Slide>

        <Slide transition={['fade']}>
          <div className="vertical-preview">
            <LiveProvider code={ codeTechnologies } noInline={true}>
                <LiveEditor  style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                }}/>
                <br></br>
                {/* <LiveError/> */}
                <LivePreview />
            </LiveProvider>
          </div>
          <small><a href="https://icons8.com/">Icons by Icons8</a></small>
        </Slide>

        <Slide>
          <object className="thankyou" type="image/svg+xml" data="./assets/thankyou.svg" onLoad={ this.animateThankYou } style={{ opacity: 0 }} aria-label="thank you"/>

          <br/>
          <br/>
          <br/>
          <br/>
          <a className="website" href="https://rafaelramalho.dev/animations-presentation">https://rafaelramalho.dev/animations-presentation</a>
          <br/>
          <br/>
          <a className="website" href="https://github.com/rafaelramalho19/animations-presentation">https://github.com/rafaelramalho19/animations-presentation</a>
        </Slide>
      </Deck>
    );
  }
}
