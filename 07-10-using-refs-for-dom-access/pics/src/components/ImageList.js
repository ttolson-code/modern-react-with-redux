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
  
  if (props.images.length) {
    return <div className="image-list ui segment">{images}</div>;
  } else {
    return (
      <div className="ui segment tutorial">
        <h2>Enter a search term to display images.</h2>
        <h3>Examples:</h3>
        <ul>
          <li>Tree</li>
          <li>Fish</li>
          <li>Space</li>
          <li>Cars</li>
        </ul>
      </div>
    );
  }
};

export default ImageList;