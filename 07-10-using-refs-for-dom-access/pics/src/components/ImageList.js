import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

// Always assign 'key' property to the root element that is being 
// returned from a list of records.
const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className={`image-list ${props.images.length ? 'ui segment' : ''}`}>{images}</div>;
};

export default ImageList;