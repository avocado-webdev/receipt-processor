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

/* Redux */
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback="loading">
        <Router>
          <App />
        </Router>
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
