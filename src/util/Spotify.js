const clientId = 'a9ab2b43e063408bba388d9faf5545f1';
const redirectUri = 'http://localhost:3000/';

let userAccessToken = '';

const Spotify = {
  getAccessToken(){
    if(userAccessToken){
      return userAccessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expirationTimeMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch && expirationTimeMatch){
      userAccessToken = accessTokenMatch;
      const expirationTime = expirationTimeMatch;
      window.setTimeout(() => userAccessToken = '', expirationTime * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {

    return fetch(`https:/api.spotify.com/v1/search?type=track&q=${term}`,
      {headers: {Authorization: `Bearer ${userAccessToken}`}}).then(response => {
          return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  },

  savePlaylist(name, trackURIs){
      const userAccessToken = Spotify.getAccessToken;
      const headers = {
        Authorization: `Bearer ${userAccessToken}`};
      let userId = '';
      return fetch('https://api.spotify.com/v1/me', {headers: headers}
      ).then(response => response.json()
    ).then(jsonResponse => {
      userId= jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: name})
        }).then(response => response.json()).then(jsonResponse => {
          const playlistId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackURIs})
          });
        });
    });
  }

};

export default Spotify;
