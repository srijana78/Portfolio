// Since we have a projects section, let's create a database schema so we ca fetch our  projects dynamically from MongoDB instead fo a local file
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  liveUrl: String,
  githubUrl: String,
  status: String
});

module.exports = mongoose.model('Project', projectSchema);