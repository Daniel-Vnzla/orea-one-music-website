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
    const { data } = await axios.get("https://api.spotify.com/v1/playlists/0jf3nrY6ZaNs1cJyLHmbrz/tracks?limit=10");
    
   return { songs: formatSongData(data), nextPage: data.next };
  }
  catch(err){
    console.log(err.message);
  }

}

export const fetchNextSongs = async (nextUrl) => {
  try {
    const { data } = await axios.get(nextUrl);
    return { songs: formatSongData(data), nextPage: data.next };
  }
  catch(err){
    console.log(err)
  }
}

const formatSongData = (data) => data.items.map((song, i) => ({
    id: Math.floor(Math.random() * (i+1000000000)),
    imgUrl: song.track.album.images[1].url,
    title: song.track.name,
    artists: song.track.artists.map(artist => artist.name).join(", "),
    previewUrl: song.track.preview_url,
  })
);