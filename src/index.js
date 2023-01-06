import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProvider from './themes/AppThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css'; 
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { Provider } from 'react-redux';
import store from './Redux/store';
import'@fortawesome/fontawesome-free/css/all.min.css'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading...</h3>
    </div>
  )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={loadingMarkup}>

  <AppThemeProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </AppThemeProvider>
  </Suspense>
);
