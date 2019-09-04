const accountSid = 'AC7eb7eafa726e94120dea19fee86c1cc1';
const authToken = '89596632d7f758def08a070d47ba43df';
const client = require('twilio')(accountSid, authToken);

class TwilioController {
    isValidPhoneNumber(req, res, next) {
        client.lookups.phoneNumbers(req.params.phoneNumber)
            .fetch({type: ['carrier']})
            .then(phone_number => res.status(200).json(phone_number))
            .catch(error => next(error));
    }

    // +15108675310
}

module.exports = new TwilioController();
