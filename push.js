let push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BJDt_3n4zPdbyy5uUMRXPTS8f_jNUa7mJlb5ixsUC5-scbHlGvb4IJrH1I2m8Wn0yFvAlgX9WDfwfQR2BF4rkVI',
    privateKey: 'JN5STwcQoIiIYFW8upCPvnNtSxiofh1VY1ezS9NiJ8k'
}
push.setVapidDetails('mailto:test@test.com', vapidkeys.publicKey, vapidkeys.privateKey)

let subscribtion = {endpoint:"https://fcm.googleapis.com/fcm/send/dqe6uwlo0vI:APA91bF6Q29boVN4L7EptzMp_Yq7PR9nXWnWXkRGp8m-NDnviOw14owFyuDm6XBhzf6Q1Ij1-LIvATbdCZBXCUXt_ON7hjkHQBZu9SEI3hOJOLg2uOf5M1r_AgadZz3n8sulPYTCCuO4",expirationTime:null,keys:{p256dh:"BCjBQKGliAcNUbRGusFaVpFlHQEfV2t4GAvd20chRnxXjlJ2Ds4y7epXpsv2KchKfjQnROdl0iWOAgesRel1S1U",auth:"RhB-D2JbVe_SCVDLbzoCmA"}}
push.sendNotification(subscribtion, 'test-message')