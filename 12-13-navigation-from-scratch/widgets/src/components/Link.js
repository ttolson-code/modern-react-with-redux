import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // If user holds command (macOS) or control (Windows) key while selecting
    // nav item, return early and allow browser to behave normally.
    // Opening a new tab and loading the page.
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    
    // Prevent normal browser behavior of a full page reload.
    event.preventDefault();
    
    // Change browser URL to clicked on href.
    window.history.pushState({}, '', href)

    // Tell dropdown components that the URL changed.
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a 
      onClick={onClick}
      className={className} 
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;