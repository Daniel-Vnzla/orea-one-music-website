import axios from 'axios';


export const fetchYoutubeVideos = async () => {
	const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
	const PLAYLIST_ID = "PLIkb_BrIXCi8GUVpG59wrMs6Q9k1aYIEP";
	const API_KEY = await __process.env.YOUTUBE_API_KEY;
	
	const { data } = await axios.get(`${YOUTUBE_API_URL}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=6&key=${__process.env.YOUTUBE_API_KEY}`);
	const videosArrId = data.items.map((item) => item.snippet.resourceId.videoId );
	return videosArrId; 
}