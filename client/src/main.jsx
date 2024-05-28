import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';
import store from "./redux/store/store.js";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { LoadingProvider } from './context/LoadingContext.jsx'

const domain = "dev-y3wtga4i20zjum82.us.auth0.com";
const clientId = "8gpnrSvqMHgA0GBY09ydiT71NkFkFl2X";

const onRedirectCallback = (appState) => {
  window.history.replaceState({}, document.title, appState?.returnTo || window.location.pathname);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PayPalScriptProvider options={{ clientId: 'AU91H9mUAAD-fARbDuP_OPx39hNyS1skJA2VgOAesbelmW0piHJX_4e5mFROHO8Q6V3ozXLD0-7zoOvT' }}>

    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
        cacheLocation="localstorage"  
        onRedirectCallback={onRedirectCallback}
      >
        <BrowserRouter>
        <LoadingProvider>
          <App />
          </LoadingProvider>
        </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
    </PayPalScriptProvider>
  </Provider>
);
