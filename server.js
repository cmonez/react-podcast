const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening in port 3000!'));
