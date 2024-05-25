// backend/routes/credentialRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Division = require('../models/Division');
const Credential = require('../models/Credential');

// Get credentials of a specific division
router.get('/divisions/:divisionId/credentials', auth, async (req, res) => {
  try {
    const division = await Division.findById(req.params.divisionId).populate('credentials');
    if (!division) {
      return res.status(404).json({ message: 'Division not found' });
    }
    res.json(division.credentials);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Add credential to a specific division's repository
router.post('/divisions/:divisionId/credentials', auth, async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const newCredential = new Credential({ name, username, password });
    const division = await Division.findById(req.params.divisionId);
    if (!division) {
      return res.status(404).json({ message: 'Division not found' });
    }
    division.credentials.push(newCredential);
    await newCredential.save();
    await division.save();
    res.json(division);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Update a specific credential
router.put('/credentials/:credentialId', auth, async (req, res) => {
  try {
    const { name, username, password } = req.body;
    let credential = await Credential.findById(req.params.credentialId);
    if (!credential) {
      return res.status(404).json({ message: 'Credential not found' });
    }
    credential.name = name;
    credential.username = username;
    credential.password = password;
    await credential.save();
    res.json(credential);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
