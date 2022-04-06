let push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BJDt_3n4zPdbyy5uUMRXPTS8f_jNUa7mJlb5ixsUC5-scbHlGvb4IJrH1I2m8Wn0yFvAlgX9WDfwfQR2BF4rkVI',
    privateKey: 'JN5STwcQoIiIYFW8upCPvnNtSxiofh1VY1ezS9NiJ8k'
}
push.setVapidDetails('mailto:test@test.com', vapidkeys.publicKey, vapidkeys.privateKey)

let subscribtion = {"endpoint":"https://fcm.googleapis.com/fcm/send/e4JGsr5KTlQ:APA91bERtb9d1Om8ZSYPsKWlTpb_H5RRngrz64VxFprhHSckgNZFYrizk7CVn3q1D-gmJh2WI8W6BCl6mcM2SFOYTSzE5CJeXE8ex9S5bEsq4UvIV-c1KUGP-r9SS8RpY1kXQPkuf8GC","expirationTime":null,"keys":{"p256dh":"BDzAMxt_0C7D8g19Pj4kqmZDzJIiRsfjDJLFgjoDjUgSXY8iBq-DTNSJ-nrWUx7nCq9yvtZ3cuVRRRxRmAEEUww","auth":"RtTxyLSVBp0-f9k9CVkuBQ"}}
push.sendNotification(subscribtion, 'test-message')