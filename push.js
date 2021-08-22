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
    endpoint:'https://fcm.googleapis.com/fcm/send/dLR_ev592mQ:APA91bG24B0oDz_kDysbr439unH0Pl9yAhLOgrg5nYt8TSBOfhkWlHPus0W6oqunsiZPvOecf_1_4GZNbqH4dfMikEkC6PLxPpbTlOp4zw_0NTSp45FpL8SSbEdUjifgDovnlMlKLsx8',
    "expirationTime":null,
    keys: {
        auth: 'sO713e6_UTIcq-LSXitH2g',
        p256dh: 'BLx8iHG84cqzsUxSfKucN6uAUUoVo8NnKsJ_bJBnbsR2x0lnx-p2ahm3xhBmIBv3juTRN8D2SHXptD1sEzrfHqU'
      }
};

webpush.sendNotification(pushSubscription, 'test message').catch(err => console.log(err));
