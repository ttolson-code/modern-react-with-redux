import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

// Custom hook
const useVideos = (defaultSearchText) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchText);
  }, [defaultSearchText]);

  const search = async (searchText) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchText
      }
    });

    setVideos(response.data.items);
  };
  
  // Return an array, can also return an object.
  return [videos, search];
};

export default useVideos;