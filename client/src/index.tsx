/* React */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/* React-Router */
import {
  BrowserRouter as Router
} from 'react-router-dom';

/* Capacitor */
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* React-Redux */
import { Provider } from 'react-redux';
import { store, persistor } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
        <Suspense fallback="loading">
          <Router>
            <App />
          </Router>
        </Suspense>
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

/**
    some plugins, such as camera and toast, have web-based UI available
    when not running natively - therefore, the element loader should be called after
    the application has been rendered for the first time
**/
defineCustomElements(window);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
