const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const example = {
  id: 1,
  content_html: 'ha',
  image: 'ad',
  date_published: 'as',
  url: 'asd',
  duration_in_seconds: 2,
};

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/', (req, res) => {
  (async () => {
    try {
      let data = await controllers.add(example);
      res.status(200).send('Document added!');
    } catch (err) {
      res.send({ Error: err });
    }
  })();
});

app.listen(3000, () => console.log('Listening in port 3000!'));
