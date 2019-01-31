import React from 'react';
import './Playlist.css'
import TrackList from '../tracklist/Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
          <TrackList />
        <a href='www.#.com' className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
