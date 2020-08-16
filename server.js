var express = require('express');
var PORT = 1985;
app = new express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
});