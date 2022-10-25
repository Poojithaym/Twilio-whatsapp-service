const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     mediaUrl: ['https://www.compareremit.com/uploads/AdobeStock_462416532.jpeg'],
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+15017122661'
   })
  .then(message => console.log(message.sid));
