import axios from 'axios';

const clientId = __process.env.SPOTIFY_CLIENT_ID;
const clientSecret = __process.env.SPOTIFY_CLIENT_SECRET_ID;

export const getSpotifyAuthToken = async () => {
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


export const fetchSpotifySongs = async (token, nextPage = null) => {
  const oreaone = "5FJS5Hy4DLO29PfMkfMKJL";
  const melanie = "0jf3nrY6ZaNs1cJyLHmbrz";

  const SPOTIFY_URL = `https://api.spotify.com/v1/playlists/${oreaone}/tracks?limit=10`;
  const NEXT_DATA_URL = nextPage;

  try {
    const { data } = await axios.get(NEXT_DATA_URL || SPOTIFY_URL,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    
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
    id: song.track.id,
    imgUrl: song.track.album.images[1].url,
    title: song.track.name,
    artists: song.track.artists.map(artist => artist.name).join(", "),
    previewUrl: song.track.preview_url,
  })
);