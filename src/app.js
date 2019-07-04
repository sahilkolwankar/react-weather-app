// NPM modules => install, import, and use
// 'validator' => module name
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/weatherApp.js';
import './styles/styles.scss';

ReactDOM.render(<WeatherApp />, document.getElementById('app'));
