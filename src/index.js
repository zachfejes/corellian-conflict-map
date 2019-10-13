import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv'
dotenv && dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();