import React from 'react';
import './Track.css';

class Track extends React.Component {

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p> Track Artist | Track Album </p>
        </div>
        <a href='www.#.com' className="Track-action">+ or -</a>
      </div>
    )
  }
};

export default Track;
