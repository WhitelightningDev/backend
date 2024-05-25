// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const { localStrategy, jwtStrategy } = require('./passport/strategies');
const userRoutes = require('./routes/userRoutes');
const credentialRoutes = require('./routes/credentialRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/credential-management-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/credentials', credentialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
