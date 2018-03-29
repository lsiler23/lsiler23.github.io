import React from 'react';

export const AboutMe = () => {

  return (
    <div className='about-me-content'>
      <div className='main-photo'>
        <img className='actual-photo' src='./assets/mepic.png'/>
        <div className='links'>
          <a href='./assets/resume.pdf'>Resume</a>
          <a href='https://github.com/lsiler23'>Github</a>
          <a href='https://www.linkedin.com/in/laurette-siler-b4335569/'>LinkedIn</a>
        </div>
      </div>
      <div className='personal'>
        <div className='written-content'>
          <h1>My name is Laurette Siler and I'm a Software Developer</h1>
          <p>
            {
              "I discovered a love for coding in a buggy place. My job was to research and report bugs to a team of talented engineers. I became fascinated with the complex end-to-end communication involved in ensuring that the company I was working for continued running smoothly. At the end of the day, I learned, success was measured by how easily customers were able to interact with their accounts."
            }
          </p>
          <p>
            {
              "My fascination escalated quickly. I started to devote all of my free time to reading books on Ruby and JavaScript. I broke and fixed my own programs every chance I could get. Finally, I decided to take a risk for the thing I loved to do and attended a coding intensive program."
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
            <span>HTML5</span>
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
};
