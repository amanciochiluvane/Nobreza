const accountSid = 'ACfa616d38788e3a8af7e4ece348acae10'
  const authToken = '24a4b0ae00c1099125d78409132a2510'
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      mediaUrl: [
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      ],
      from: 'whatsapp:+258844165303',
      to: 'whatsapp:+258849034816',
    })
    .then(message => console.log(message.sid));