const express = require('express');
const router = express.Router();
const controller = require('../controllers/post');


router.get("/post/:title",controller.post_res);
router.post("/post",controller.post_req);

module.exports = router;