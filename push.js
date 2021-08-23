const webpush = require('web-push');

// let vapidKey = webpush.generateVAPIDKeys();

// console.log(vapidKey);

// {
//     publicKey: 'BGOjPDin5Or-algPlHo7cYXUW7kmGN0O2QNsycZGiZq_6w-pip27lEflS4Y3PfNzn3_mvPqBGbT62qsT0ifd8Fw',
//     privateKey: 'E4hOBygmigf6AEo8Dn0vq6nFhPiUZC9maHEdKzCDKJY'
// }
const vapidKeys = {
    publicKey: 'BGOjPDin5Or-algPlHo7cYXUW7kmGN0O2QNsycZGiZq_6w-pip27lEflS4Y3PfNzn3_mvPqBGbT62qsT0ifd8Fw',
    privateKey: 'E4hOBygmigf6AEo8Dn0vq6nFhPiUZC9maHEdKzCDKJY'
};





const options = {
    //gcmAPIKey: 'NOT IN USE',
    TTL: 60,
    vapidDetails: {
        subject: 'mailto: myemail@gmail.com',
        publicKey:  vapidKeys.publicKey,
        privateKey: vapidKeys.privateKey
      },
      contentEncoding: 'aes128gcm'
  };

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
 );
//  "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhI…1uYot8z4RwyFToaKpdCQpcyL-Yv3I1nZTCIIrdDc5mmv7xRt8U1wpc8PM2c4","keys":{"auth":"lO8Mu-CEolRSnQ5Bs7O1xw","p256dh":"BH1dXJC6GcHtQpN5cysCxYjF2eVPid_qn1jEKr3-0O7KysIL6gfBRfqB9fZqj6-VJ4qksSFXkuqTPh_g0Q-9ms"


// {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhI…1uYot8z4RwyFToaKpdCQpcyL-Yv3I1nZTCIIrdDc5mmv7xRt8U1wpc8PM2c4","keys":{"auth":"lO8Mu-CEolRSnQ5Bs7O1xw","p256dh":"BH1dXJC6GcHtQpN5cysCxYjF2eVPid_qn1jEKr3-0O7KysIL6gfBRfqB9fZqj6-VJ4qksSFXkuxqTPh_g0Q-9ms"}}
let pushSubscription = {
    endpoint:'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhIzV1f3vJ1XCV3W34Qv2xhM4RYO2sZcA9enww2jyLDKOuSKeo4dSC4umTx9_7rLzbWn2HF3AL4qt1ilmk4wn3B25itYw8f4h3l74MjfhUVugamGXwdtMM09oa6UxoPq29WEanMhWbQd-_Yu6tA_Ufn366ahoK7pbO8L3Qz7Ci3UxRtdg',
    expirationTime:null,
    keys: {
        auth: '7eKw42PCV1S-YlX2vo9CtQ',
        p256dh: 'BN_HzsN1TshZnUHB6PRNsUmU2pcMJA6x7UpdAci5pzXis-zHMPU4cCQWL6hPldrmdPTp-aROoU7_hqvD1KejilM'
      }
};

webpush.sendNotification(pushSubscription, 'test message').catch(err => console.log(err));
