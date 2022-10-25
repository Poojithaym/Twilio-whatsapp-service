const accountSid = process.env.TWILIO_ACCOUNT_SID; //Enter your Twilio Account SID in place of process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN; //Enter your Twilio Auth Token in place of process.env.TWILIO_ACCOUNT_SID

const express = require('express');
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.post("/", (req, res) => {
  console.log(req.body);
    if((req.body.Body=="Send me an image") || (req.body.Body=="send me an image")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Diwali",
            mediaUrl: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else if((req.body.Body=="Send video") || (req.body.Body=="send video")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Video",
            mediaUrl: "https://www.w3schools.com/tags/movie.mp4"
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else if((req.body.Body=="Send document") || (req.body.Body=="send  document")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            mediaUrl: 'https://www.africau.edu/images/default/sample.pdf'
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else{
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Welcome to Chatbot \n1. Enter 'send image' \n2. Enter 'send video' \n3. Enter 'send  document' "
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
  });

app.listen(3000, () => {
  console.log('Server Started');
});
