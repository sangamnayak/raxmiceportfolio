const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog');


router.get("/blog",controller.blog_res);
router.post("/blog",controller.blog_req);

module.exports = router;