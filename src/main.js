import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Index from './components/index';
import Header from './components/pc/header';
import Footer from './components/pc/footer';

export default class Main extends Component {
    render(){
        return (
            <Router history={hashHistory}>
	            <Route component={Index} path="/"></Route>
			    <Route component={Header} path="header"></Route>
	            <Route component={Footer} path="footer"></Route>
            </Router>
        )
    }
}
ReactDOM.render(<Main/>,document.getElementById('app'));