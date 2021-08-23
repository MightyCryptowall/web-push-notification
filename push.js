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
    endpoint:'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhIzRvJ2-BU0b-oj74MKfAAC_H1KdotJc_ThhhiM1Ulk-FeGETy_iNrp7lYY7hvyRmwvbwbhM1u-V8hFTAXOYr9qOgzRqN2QONYQhEOnA21PgE8U5UOaoshUh4Y2THKoZ13UpDQDwVBgjAlLKXeDaa_4Hc_wxMYAz88YhdIiKKpij9zyg',
    expirationTime:null,
    keys: {
        auth: 'W2gj7oeRAggHEQwBC5htMg',
        p256dh: 'BKHC_rB166TEi9UEQj3_bSHavEszx1YmuLKg0qF9AWmGvaB5FAdzNdaD15ncooQmk548M0Voo-K8VBnYzUoK-Wk'
      }
};

webpush.sendNotification(pushSubscription, 'test message').catch(err => console.log(err));
