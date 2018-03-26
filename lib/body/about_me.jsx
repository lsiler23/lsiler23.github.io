import React from 'react';

export default class AboutMe extends React.Component {

  render() {
    return (
      <div className='about-me-content'>
        <div className='main-photo'>
          <img className='actual-photo' src='./assets/mepic.png'/>
          <div className='links'>
            <a href='https://docs.google.com/document/d/1Sk53SmQVPofQwNk82MGNmmMPpHZYCz8odNrE6OYEy38/edit?usp=sharing'>Resume</a>
            <a href='https://github.com/lsiler23'>Github</a>
            <a href='https://www.linkedin.com/in/laurette-siler-b4335569/'>LinkedIn</a>
          </div>
        </div>
        <div className='personal'>
          <div className='written-content'>
            <h1>My name is Laurette Siler and I'm a Software Developer</h1>
            <p>
              {
                "In early 2017, I discovered a love for coding unexpectedly. I was working as a member of the Customer Experience Tech Team at Blue Apron and tasked with reporting bugs in the website and iOS app to the Engineering Department. I became fascinated with the end-to-end communication involved in ensuring that the website continued running smoothly. My fascination escalated over time, so I decided to take the leap and start teaching myself to code."
              }
            </p>
            <p>
              {
                "Now, I'm experienced in every aspect of Full Stack development. So far, I've been working with Ruby on Rails on the backend and React and Redux on the frontend, though I'm excited to expand my knowledge every chance I can get. I absolutely love my career and can't wait to continue to build amazing apps."
              }
            </p>
          </div>
        <div>
          <h2>Skill Set</h2>
          <div className='all-icons'>
            <div className='icon'>
              <img src='./assets/react.png'/>
              <span>React</span>
            </div>
            <div className='icon'>
              <img src='./assets/redux.png'/>
              <span>Redux</span>
            </div>
            <div className='icon'>
              <img src='./assets/javascript.svg'/>
              <span>JavaScript</span>
            </div>
            <div className='icon'>
              <img src='./assets/ruby.svg.png'/>
              <span>Ruby</span>
            </div>
            <div className='icon'>
              <img src='./assets/rails.png'/>
              <span>Rails</span>
            </div>
            <div className='icon'>
              <img src='./assets/postgresql.svg.png'/>
              <span>PostgreSQL</span>
            </div>
            <div className='icon'>
              <img src='./assets/jquery.png'/>
              <span>jQuery</span>
            </div>
            <div className='icon'>
              <img src='./assets/html.ico'/>
              <span>HTML5 & Canvas</span>
            </div>
            <div className='icon'>
              <img src='./assets/css3.png'/>
              <span>CSS3</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
