console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Clock),
        document.getElementById('mount')
    );
});