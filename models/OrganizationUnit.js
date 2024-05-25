// backend/models/OrganizationUnit.js
const mongoose = require('mongoose');

const ouSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('OrganizationUnit', ouSchema);

