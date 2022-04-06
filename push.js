let push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BJDt_3n4zPdbyy5uUMRXPTS8f_jNUa7mJlb5ixsUC5-scbHlGvb4IJrH1I2m8Wn0yFvAlgX9WDfwfQR2BF4rkVI',
    privateKey: 'JN5STwcQoIiIYFW8upCPvnNtSxiofh1VY1ezS9NiJ8k'
}
push.setVapidDetails('mailto:test@test.com', vapidkeys.publicKey, vapidkeys.privateKey)

let subscribtion = {};

push.sendNotification(subscribtion, 'test-message')