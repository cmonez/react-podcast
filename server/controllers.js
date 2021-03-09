const db = require('../database/connection');
const PodcastEpisodes = require('../database/schema');

module.exports = {
  async add(doc) {
    PodcastEpisodes.insertMany(doc);
  },

  async delete(id) {
    PodcastEpisodes.deleteOne({ id: id });
  },
};
