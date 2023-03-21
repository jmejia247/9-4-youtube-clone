import { useEffect, useState } from "react"
import { getAllVideos } from "../../Api/fetch"

import "./VideosIndex.css"
import VideoListing from "./VideoListing"

function VideosIndex() {
    const [search, setSearch] = useState("search")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        console.log(videos)
    }, [videos])

    function handleTextChange(event) {
        const title = event.target.value
        console.log(title)
        setSearch(title)
    }

    async function handleSubmit() {
        const videos = await getAllVideos(search)
        setVideos(videos.items)
    }

    return (
        <div>
            <section>
                <label for="search">
                    <input 
                    type="text"
                    value={search}
                    id="search"
                    onChange={handleTextChange}
                    />
                    <button onClick={handleSubmit} className="fa-solid fa-magnifying-glass"/>
                </label>
            </section>
            <section className="videos">
                {videos.map((video) => {
                    return <VideoListing video={video} key={video.id} className="video"/>
                })}
            </section>
        </div>
    )
} 

export default VideosIndex;