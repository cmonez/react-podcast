const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/react_podcasts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const Schema = mongoose.Schema;

const PodcastEpisodeSchema = new Schema({
  id: Number,
  content_html: String,
  image: String,
  date_published: String,
  url: String,
  duration_in_seconds: Number,
});

const PodcastEpisodes = mongoose.model('PodcastEpisode', PodcastEpisodeSchema);

module.exports = PodcastEpisodes;
