import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Bass fishing');
  
  // Whenever we complete a search, and get back a list of videos,
  // we will select the first video as the default.
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className=" ui container" style={{ paddingTop: '2rem' }}>
      <SearchBar onSearchSubmit={search} />
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