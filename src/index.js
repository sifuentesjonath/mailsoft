import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


// main point of the app
// IMPORTANT:   THE TEST CASE IS IN __TEST__ findByPlaceholderText, THERE ARE THE CONFIG FILE AND THE MOCK FILE, TO START TESTING RUN NPM TEST 

const container = document.getElementById('app');

ReactDOM.render(<App />, container);

