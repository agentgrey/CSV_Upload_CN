/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();

/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const homeController = require('../controllers/home_controller');

/** ------------------ MAKING ROUTES ------------------ **/
router.get('/', homeController.home);


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;