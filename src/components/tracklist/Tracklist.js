import React from 'react';
import './Tracklist.css'
import Track from '../track/Track';

class TrackList extends React.Component {
  render() {
    return(
      <div className="TrackList">
        <Track />
      </div>
    )
  }
};

export default TrackList;
