import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // useEffect cleanup function:
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_TRANSLATE_KEY
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText)
    };

    if (text) {
      translateText();
    } else {
      setTranslatedText('');
    }
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;