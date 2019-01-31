const clientId = 'a9ab2b43e063408bba388d9faf5545f1';
const redirectUri = '"http://localhost:3000/"';

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
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  }
};

export default Spotify;
