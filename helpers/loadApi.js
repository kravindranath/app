var fs = require('fs');

function loadApi(req, res){
    var filename = req && req.params && req.params.filename || '',
        data;
    try{
        data = fs.readFileSync(`api/${filename}.json`, 'utf8');
        if(data) {
            return data;
        }else{
            throw 'No data available';
        }
    }catch(err){
        res.status(200).send(err.message).end();
    }
}
module.exports = loadApi;