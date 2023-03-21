const KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL

export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${KEY}`).then((response) => response.json())
}

// https://youtube.googleapis.com/youtube/v3/search?q=${newInput}&part=snippet&maxResults=6&key=${process.env.REACT_APP_API_KEY}