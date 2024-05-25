const express = require('express');
const router = express.Router();

// Route for changing a user's role
router.put('/:userId/role', (req, res) => {
  const userId = req.params.userId;
  const newRole = req.body.role; // Assuming role is sent in the request body
  // Logic to change the user's role
  // Example: User.findByIdAndUpdate(userId, { role: newRole });
  res.send('Role changed successfully');
});

module.exports = router;
