import React from 'react';

export const Contact = () => {

  return (
    <div className='contact-content'>
      <h1 className='contact-h1'>Contact</h1>
      <div className='contact-info-details'>
        <div className='contact-sect'>
          <h2 className='contact-h2'>Email</h2>
          <a href='mailto:siler.laurette@gmail.com'>siler.laurette@gmail.com</a>
        </div>
        <div className='contact-sect'>
          <h2 className='contact-h2'>Location</h2>
          <div className='brooklyn'>Brooklyn, NY</div>
        </div>
        <div className='contact-sect'>
          <h2 className='contact-h2'>Github</h2>
          <a href='https://github.com/lsiler23'>lsiler23</a>
        </div>
        <div className='contact-sect'>
          <h2 className='contact-h2'>LinkedIn</h2>
          <a href='https://www.linkedin.com/in/laurette-siler-b4335569/'>laurette-siler</a>
        </div>
      </div>
    </div>
  );
};
