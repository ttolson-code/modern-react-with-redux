import React, { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amoung engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Purple',
    value: 'purple'
  }
];

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);

  // Whenever we provide a JSX component tag inside of another
  // JSX component tag, the inner element is provided to the outer
  // component called 'children'.
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Selet a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};