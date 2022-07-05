const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');


router.get("/contact",controller.contact_res);
router.post("/contact",controller.contact_req);

module.exports = router;