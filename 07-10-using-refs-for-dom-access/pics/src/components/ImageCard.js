import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridSpans: 0 };
    this.imageRef = React.createRef();
  }
  
  // Runs after component renders
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setGridSpans);
    window.addEventListener('resize', this.setGridSpans);
  }

  setGridSpans = () => {
    // Conditional chaining
    const imageHeight = this?.imageRef?.current?.clientHeight;

    if (imageHeight) {
      const gridSpans = imageHeight + 10;
  
      this.setState({ gridSpans });
    }
  };

  render() {
    const {description, urls } = this.props.image;
    return (
      <div className="image-container" style={{ gridRowEnd: `span ${this.state.gridSpans}` }}>
        <img 
          ref={this.imageRef}
          alt={description} 
          src={urls.regular} 
        />
      </div>
    );
  }
}

export default ImageCard;

// ImageCard component flow:
// - Let the ImageCard render itself and its image
// - Reach into the DOM and figure out the heigh of the image
// - Set the image height on the state to get the component to rerender
// - When rerendering, assign a 'grid-row-end' to make sure
///  the image takes up the appropriate space