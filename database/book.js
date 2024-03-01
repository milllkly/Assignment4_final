const mongoose = require('mongoose');

const parfumeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  deletionDate: { type: Date, default: null },
  perfumeImage: { type: String, default: 'default.png' },
});

const Parfume = mongoose.model('Book', parfumeSchema);

module.exports = Parfume;