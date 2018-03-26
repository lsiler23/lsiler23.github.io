import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='projects-content'>
        <h1 className='project-h1'>Projects</h1>
        <div className='project'>
          <div className='slide-pic'>
            <img src='./assets/slide.png'/>
          </div>
          <div className='project-info'>
            <h2>Slide</h2>
            <h3>Rails, React/Redux, Action Cable/Websockets</h3>
            <p>Slide is a live messaging app.</p>
          </div>
        </div>
        <div className='project'>
          <div className='spacealone-pic'>
            <img src='./assets/spacealone.png'/>
          </div>
          <div className='project-info'>
            <h2>SpaceAlone</h2>
            <h3>Vanilla JavaScript, HTML5, CSS3</h3>
            <p>SpaceAlone is a game.</p>
          </div>
        </div>
        <div className='project'>
          <div className='strawberryDOM-pic'>
            <img src='./assets/strawberry.png'/>
          </div>
          <div className='project-info'>
            <h2>strawberryDOM</h2>
            <h3>Vanilla JavaScript, HTML5, CSS3</h3>
            <p>strawberryDOM is a DOM manipulation library.</p>
          </div>
        </div>
      </div>
    );
  }
}
