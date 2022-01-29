import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  
  // In React 17, any custom event listeners set outside of react, 
  // e.g. document.body, require { capture: true } in order to run before react event handlers. 
  // Not providing this option to custom event handlers will cause react child event 
  // handlers to run before custom ones.
  // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues
  useEffect(() => {
    const onBodyClick = (event) => {
      // If the element that is clicked on is inside of the dropdown
      // component then return early. Otherwise, if the click
      // isnt inside of the dropdown component, close the dropdown
      // by calling setOpen() and passing false.
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });
    
    // useEffect cleanup function:
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div 
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  });
  
  // After component is rendered for the first time
  // we get a reference to the div we created a reference to. 
  // console.log(ref.current);
  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div 
            onClick={() => setOpen(!open) } 
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ui segment">
        <p style={{ color: selected.value }}>The text color is {selected.value}.</p>
      </div> */}
    </div>
  )
};

export default Dropdown;