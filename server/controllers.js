const db = require('../database/connection');
const PodcastEpisodes = require('../database/schema');

module.exports = {
  async add(doc) {
    await PodcastEpisodes.insertMany(doc);
  },

  async delete(id) {
    await PodcastEpisodes.deleteOne({ id: id });
  },

  async grabAllDocuments() {
    let data = await PodcastEpisodes.find({});
    return data;
  },
};
