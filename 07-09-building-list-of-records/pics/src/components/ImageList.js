import React from 'react';

// Always assign 'key' property to the root element that is being 
// returned from a list of records.
const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />
  });

  return <div>{images}</div>;
};

export default ImageList;