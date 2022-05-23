import React from 'react';

// Create context object.

// Can pass data into the object by setting up a default value, 
// we can create a default value by passing it directly into the create
// context call. 

// This will indicate to the Field and Button components that by default,
// the selected language is English.

// The default value for the LanguageContext object is 'English'.

export default React.createContext('english');