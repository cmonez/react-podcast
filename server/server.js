const express = require('express');
const path = require('path');
const controllers = require('./controllers');
const cors = require('cors');
const axios = require('axios');
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
app.use(cors());
app.use(express.static('public'));

app.get('/feed', async (req, res) => {
  let urlToSearch = req.query.url;
  try {
    let data = await axios.get(urlToSearch);
    res.send({ data: data.data.items });
  } catch (err) {
    res.status(404);
  }
});

app.post('/create', async (req, res) => {
  let documentToCreate = {
    id: req.body.id,
    content_text: req.body.content_text,
    image: req.body.image,
    date_published: req.body.date_published,
    url: req.body.attachments[0].url,
    duration_in_seconds: req.body.attachments[0].duration_in_seconds,
    title: req.body.title,
  };

  try {
    let data = await controllers.add(documentToCreate);
    res.status(200).send('Document successfully added!');
  } catch (err) {
    res.send({ Error: err });
  }
});

app.delete('/', async (req, res) => {
  try {
    let data = await controllers.delete('1');
    res.status(200).send('Document successfully delete!');
  } catch (err) {
    res.send({ Error: err });
  }
});

app.listen(3000, () => console.log('Listening in port 3000!'));
