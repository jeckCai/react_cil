'use strict';

require('./main.css');
// require('react-fastclick');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

// 模块
var Login = require('./modules/login/Login.js');
var Index = require('./modules/index/index.js');
var Masonry = require('./modules/masonry/index');
var Power = require('./modules/power/index');
var RichPlayWay = require( './modules/richPlayWay/richPlayWay.js');
var RichInfo = require( './modules/richInfo/richInfo.js');
var RichIdentity = require( './modules/richIdentity/richIdentity.js');
var Richuppower = require('./modules/richUpPower/richUpPower.js');
// 点击上移点击上移
require('./cmp/hack.js');



var AppContent = React.createClass({
    render: function() {
        return (
            <div className="abc" style={{height:'100%',width:'100%',"overflow-x": 'hidden',"overflow-y": 'scroll',background:'#fff'}}>
                {this.props.children}
            </div>
        )
    },
});

// 内容
var mainCom = ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={AppContent}>
        	
            <IndexRoute component={Login}></IndexRoute>
            <Route path="login/:token" component={Login}/>
            <Route path="index" component={Index}></Route>
            <Route path='masonry' component={Masonry}></Route>
            <Route path='power' component={Power}></Route>
            <Route path='richIdentity' component={RichIdentity}></Route>
            <Route path='richuppower' component={Richuppower}></Route>
            <Route path='richInfo' component={RichInfo}></Route>
            <Route path='richPlayWay' component={RichPlayWay}></Route>
            
        </Route>
    </Router>,
    document.getElementById('app')
);
