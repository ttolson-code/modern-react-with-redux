import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  // Set state for sole purpose of being able to rerender Route component.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // Pass empty array into useEffect hook so it 
  // only runs once on initial component render.
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Add event listener to listen for popstate event.
    window.addEventListener('popstate', onLocationChange);

    // useEffect cleanup function:
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, []);
  
  return currentPath === path ? children : null;
};

export default Route;