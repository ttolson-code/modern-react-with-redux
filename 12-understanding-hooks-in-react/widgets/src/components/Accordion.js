import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // Initialize state:
  // Array destructuring, useState returns an array with two elements.
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper method:
  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      // Using react fragment instead of 'div' to fix double semantic ui border issue.
      <React.Fragment key={item.title}>
        <div 
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;