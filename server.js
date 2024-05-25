const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Import the new routes
const assignDesignUsersRoutes = require('./routes/assignDesignUsersRoutes');
const changeUserRoleRoutes = require('./routes/changeUserRoleRoutes');

// Use the new routes
app.use('/api/users', assignDesignUsersRoutes);
app.use('/api/users', changeUserRoleRoutes);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
