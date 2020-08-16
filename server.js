var express = require('express');
var PORT = 1985;
app = new express();

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

app.get('/', function(req, res){
    res.send('App Home');
});

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});