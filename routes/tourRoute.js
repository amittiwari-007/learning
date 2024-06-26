const express = require('express');
const tourController = require('../controllers/tourControllers');
const authController = require('../controllers/authController');
const reviewRouter = require('./../controllers/reviewController');
const reviewRoute = require('./reviewRoute.js');

const router = express.Router();

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:tourId/reviews',reviewRoute);

router
    .route('/tour-stats')
    .get(tourController.getTourStats);
router
    .route('/monthly-plan/:year')
    .get(
        authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),tourController.getMonthlyPlan);
router
    .route('/aise')
    .get(tourController.aise);

router
    .route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.getAllTours);
router
    .route('/')
    .get( tourController.getAllTours)
    .post(authController.protect,
        authController.restrictTo('admin', 'lead-guide'),tourController.createTour);
router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.deleteTour);

module.exports = router;