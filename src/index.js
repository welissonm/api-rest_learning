const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log('servidor rodando');
app.get('/', (req, res) => {
    res.send('Ok');
})
app.listen(3000);