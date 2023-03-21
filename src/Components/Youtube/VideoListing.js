import "./VideoListing.css"

function VideoListing({ video }) {
    return (
        <div className="video">
            <img 
            src={video.snippet.thumbnails.default.url}
            title={video.id.videoId}
            alt={video.snippet.title}
            />
            <p>{video.snippet.title}</p>
            <p>{video.snippet.channelTitle}</p>
        </div>
    )
}

export default VideoListing;