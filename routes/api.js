const express = require('express');
const router = express.Router();

/**
 * Middlewares & Graphs
 */
const {
  user
} = require('../controllers');

/**
 * Convention
 * @method GET: get data
 * @method POST: add new data
 * @method PUT: update data
 * @method DELETE: delete data
 */

// User
router.get('/user', user.getUser);
router.post('/user', user.addUser);
router.put('/user', user.updateUser);
router.delete('/user', user.deleteUser);

/**
 * Module exports
 */
module.exports = router;