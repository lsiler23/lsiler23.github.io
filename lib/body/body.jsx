import React from 'react';
import AboutMe from './about_me';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { current } = this.props;
    let selectedComponent;

    if (current === '1') {
      selectedComponent = <AboutMe />;
    } else if (current === '2') {
      selectedComponent = 'projects';
    } else {
      selectedComponent = 'contact';
    }

    return (
      <div className='main-content'>{ selectedComponent }</div>
    );
  }
}
