import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import middleware from "./middleware";
import { Middleware } from "redux";
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
