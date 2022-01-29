import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Italian',
    value: 'it'
  },
  {
    label: 'Russian',
    value: 'ru'
  },
  {
    label: 'Spanish',
    value: 'es'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language} 
        onSelectedChange={setLanguage} 
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;