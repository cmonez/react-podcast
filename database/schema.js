const mongoose = require('mongoose');

const PodcastEpisodeSchema = new mongoose.Schema({
  id: Number,
  content_html: String,
  image: String,
  date_published: String,
  url: String,
  duration_in_seconds: Number,
});

const PodcastEpisode = mongoose.model('PodcastEpisode', PodcastEpisodeSchema);

module.exports = PodcastEpisode;
