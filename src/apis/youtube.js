import axios from 'axios';

const KEY = 'AIzaSyDfIrH3GHva9faWChXLrJVoUmbmnOIy8WY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


