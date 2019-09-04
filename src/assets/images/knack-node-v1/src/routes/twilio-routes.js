const twilioController = require('../controllers/twilio.controller');
const router = require('express').Router();

router.get('/check-phone-number/:phoneNumber', function (req, res, next) {
   if (!req.params.phoneNumber)
      return res.status(422).json({message: 'the phone_number is required'});

   twilioController.isValidPhoneNumber(req, res, next)
});

module.exports = router;
