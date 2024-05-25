// backend/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/credential-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
