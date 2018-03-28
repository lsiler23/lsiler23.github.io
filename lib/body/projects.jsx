import React from 'react';

export const Projects = () => {
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
          <ul className='project-ul'>
            <li>Live messaging is made possible using Rails’ Websockets interface (Action Cable)</li>
            <li>Users maintain access to their channels/direct messages via systematic database storage</li>
            <li>Includes a GIPHY API shortcut available in any channel or direct message</li>
            <li>Ensures user and database security via end-to-end authentication</li>
          </ul>
          <div className='links'>
            <a className='link' href='http://slide-chat-app.herokuapp.com/#/'>Live</a>
            <a className='link' href='https://github.com/lsiler23/slide'>Github</a>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='spacealone-pic'>
          <img src='./assets/spacealone.png'/>
        </div>
        <div className='project-info'>
          <h2>SpaceAlone</h2>
          <h3>Vanilla JavaScript, HTML5, CSS3</h3>
          <p>SpaceAlone is an arcade-like game in which the player must respond to directives and perform the corresponding action for points - on a spaceship..</p>
          <ul className='project-ul'>
            <li>Players can choose their level of difficulty before each game, allowing for a more customizable experience.</li>
            <li>A randomized directive  generator turns on event listeners on only the target controls.</li>
            <li>If a directive is completed in time, additional directives are provided to promote game responsiveness.</li>
            <li>Though randomized, the generator is aware of default settings on controls, as well as which other variations are allowed per each control.</li>
          </ul>
          <div className='links'>
            <a className='link' href='https://lsiler23.github.io/SpaceAlone/'>Live</a>
            <a className='link' href='https://github.com/lsiler23/SpaceAlone'>Github</a>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='strawberryDOM-pic'>
          <img src='./assets/strawberry.png'/>
        </div>
        <div className='project-info'>
          <h2>strawberryDOM</h2>
          <h3>Vanilla JavaScript, XML</h3>
          <p>strawberryDOM is a DOM manipulation library.</p>
          <ul className='project-ul'>
            <li>
              <ul>Users can:
                <li>Create or remove HTML elements from the DOM.</li>
                <li>Toggle classes</li>
                <li>Access parents or children of a given element</li>
                <li>Create or remove event listeners</li>
                <li>Send ajax-equivalent XML requests</li>
              </ul>
            </li>
          </ul>
          <div className='links'>
            <a className='link' href='https://lsiler23.github.io/strawberryDOMDemo/'>Live Demo</a>
            <a className='link' href='https://github.com/lsiler23/strawberryDOM'>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
