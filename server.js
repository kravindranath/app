const express = require('express');

const PORT = 1985;
app = new express();

//for webpack middleware with express
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

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