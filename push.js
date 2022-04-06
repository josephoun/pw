let push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BJDt_3n4zPdbyy5uUMRXPTS8f_jNUa7mJlb5ixsUC5-scbHlGvb4IJrH1I2m8Wn0yFvAlgX9WDfwfQR2BF4rkVI',
    privateKey: 'JN5STwcQoIiIYFW8upCPvnNtSxiofh1VY1ezS9NiJ8k'
}
push.setVapidDetails('mailto:test@test.com', vapidkeys.publicKey, vapidkeys.privateKey)

let subscribtion = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fvYvpr5YvD4:APA91bEJC0bu7NHvPKM9RY8TW18_PH_L2H6Ac-qCuqToUNorNkVQ7v8sBdMk-8_B-RRFfdA2x0In2_WtHlenktoZ_krhTd0D3qwEmD4wfTJoheom8cnPU0B4TWnNfkYphKpgJGaW9dV8",
    expirationTime:null,
    keys: {
        p256dh:"BLUCYZSpkK8WhPBsFvuZ4wRmLBfLDJ1bQCuNbjMS08E25LGkfirEtxIMLnTYU5zYfCH_F_1tvip2wfnex4p5h_k",
        auth:"nvUtTEgEwkrHIHB0ZSt-9g"
    }
}

push.sendNotification(subscribtion, 'test-message')