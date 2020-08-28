const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 1985;
var app = new express();

//for webpack middleware with express
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack.config.js');
const compiler = webpack(config);
const webpackDev = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
});

import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App';

const main = renderToString(<App />);
let template = fs.readFileSync(path.resolve('templates/main.html'), {encoding: 'utf-8'});
if(template) {
    template = template.replace('{{body}}', main);
    template = template.replace('{{title}}', 'Simple Web App');
}


app.use('/', function (req, res, next) {
    res.set('content-type','text/html');
    res.send(template);
    res.end();
});

app.use(webpackDev);

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});

/*
//----------------LOAD mock API using express ------------------------------------

const loadApi = require('./helpers/loadApi');
app.get('/api/:filename.json', function(req, res){
    var data = loadApi(req, res);

    if(data) {
        res.status(200)
            .type('json')
            .send(data);
    }else{
        console.log('No Endpoint found');
    }
    res.end();
});

//----------------------------------------------------------

app.get('/', function(req, res){
    res.send('App Home');
});
*/
