import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from "i18next"
import {initReactI18next} from 'react-i18next'

import fr from './languages/fr'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: fr
      }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
