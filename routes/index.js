const router = require('express').Router();
const apiRoutes = require('./api');

// Add a welcome route for the root path
router.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;