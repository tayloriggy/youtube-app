import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    //represents a piece of state that is a list of videos
    const [selectedVideo, setSelectedVideo] = useState(null); //piece of state that is a selected video
    const [videos, search] = useVideos('castles');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    

    
    return( //this is all jsx code
        <div className="ui container">
           <SearchBar onFormSubmit={search} />
           <div className="ui grid">
               <div className="ui row">
                   <div className="eleven wide column">
                       <VideoDetail video={selectedVideo} />
                   </div>
                   <div className="five wide column">
                       <VideoList 
                           onVideoSelect={setSelectedVideo} 
                           videos={videos} 
                       />
                   </div>
               </div>
           </div>
       </div>
   );
};

export default App;