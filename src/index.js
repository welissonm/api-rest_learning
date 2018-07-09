const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log('servidor rodando');
app.get('/', (req, res) => {
    res.send('Ok');
})

require('./controllers/authController')(app);

app.listen(3000);