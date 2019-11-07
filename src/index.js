//dependences
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//routes
import AppRouter from './route';
ReactDOM.render(
    <Router>
        <AppRouter />
    </Router>
    ,document.getElementById('root'));
