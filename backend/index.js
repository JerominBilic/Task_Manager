const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/task');
const cors = require('cors');

app.use(cors());

config.authenticate().then(() => {
console.log('Database is connected');
}).catch((err) => {
    console.log(err);
});

app.get('/', function(req,res){
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});




app.listen(3000, () => {
    console.log('Service running on port 3000...')
});