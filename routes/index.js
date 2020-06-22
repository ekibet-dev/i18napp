var express = require('express');
const IndexContoller = require('../controllers/index_controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', IndexContoller.list);


module.exports = router;
