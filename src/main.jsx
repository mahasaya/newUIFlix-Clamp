import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const store = configureStore({
  reducer: rootReducer
});

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, []);

  return null;
}
createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      
        <BrowserRouter basename="/newUIFlix-Clamp">
        <RedirectHandler/>
          <App />
        </BrowserRouter>
      
    </Provider>

)
