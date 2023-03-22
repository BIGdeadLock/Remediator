const crypto = require('crypto');

const key = crypto.randomBytes(32); // generate a 256-bit key

const message = 'This is a message to be authenticated';
const hmac = crypto.createHmac('sha256', key);
hmac.update(message);
const digest = hmac.digest('hex');

console.log('HMAC:', digest);