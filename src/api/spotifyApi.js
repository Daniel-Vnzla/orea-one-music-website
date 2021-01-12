import axios from 'axios';

const clientId = __process.env.SPOTIFY_CLIENT_ID;
const clientSecret = __process.env.SPOTIFY_CLIENT_SECRET_ID;


const getSpotifyAuthToken = async () => {
  try{
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
    const data = await result.json();

    return data.access_token;
  }
  catch(err){
    console.log(err.message);
  }
}
export const fetchSpotifySongs = async () => {
  try {
    const token = await getSpotifyAuthToken();
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
    const { data } = await axios.get("https://api.spotify.com/v1/playlists/5FJS5Hy4DLO29PfMkfMKJL/tracks?limit=10");
    
    const songsData = data.items.map(song => ({
        imgUrl: song.track.album.images[1].url,
        title: song.track.album.name,
        artists: song.track.artists.map(artist => artist.name),
        previewUrl: song.track.preview_url
      })
    );
   return songsData
  }
  catch(err){
    console.log(err.message);
  }

}