const express = require('express');
const insightsRoutes = require('./insights');

const router = express.Router();

// Insight route
router.use('/insights', insightsRoutes);

// Health route
router.get('/health', (req, res) => {
    res.send('Health is okay');
});

module.exports = router;