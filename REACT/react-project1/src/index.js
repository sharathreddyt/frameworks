import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// components

import Home from './components/home';
import Artist from './components/artist';


const App = () =>{
    return(
        <BrowserRouter>
        <div>
            <Route exact path = '/' component = {Home}></Route>
            <Route path = '/artist/:artistd' component = {Artist}></Route>
        </div>
        </BrowserRouter>

    );
}

ReactDOM.render(<App/>,document.getElementById('root'));