//dependencies 
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//componentes
import App from './components/App';
import Home from './components/home';
import Register from './components/register';

//components


const appRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component = {Home} ></Route>
            <Route exact path="/register" component = {Register}></Route>
        </Switch>
    </App>;

export default appRoutes;