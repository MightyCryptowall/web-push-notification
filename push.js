const webpush = require('web-push');

let vapidKey = webpush.generateVAPIDKeys();

console.log(vapidKey);

// {
//     publicKey: 'BGOjPDin5Or-algPlHo7cYXUW7kmGN0O2QNsycZGiZq_6w-pip27lEflS4Y3PfNzn3_mvPqBGbT62qsT0ifd8Fw',
//     privateKey: 'E4hOBygmigf6AEo8Dn0vq6nFhPiUZC9maHEdKzCDKJY'
// }
const vapidKeys = {
    publicKey: 'BGOjPDin5Or-algPlHo7cYXUW7kmGN0O2QNsycZGiZq_6w-pip27lEflS4Y3PfNzn3_mvPqBGbT62qsT0ifd8Fw',
    privateKey: 'E4hOBygmigf6AEo8Dn0vq6nFhPiUZC9maHEdKzCDKJY'
};



webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);



let pushSubscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhI…twZcUDrlWce0rwPO0GdUYGgk__jPwm52Nt5Z56hN4XDPxsWPBXQtUyyWyNrg","keys":{"auth":"0Z_gRf0LYvVsvXIZsz5xBQ","p256dh":"BLuc0OjcOjiwpfW3KTfnQNyK1YiWgK7An83EmuaVNlHUNd4f_XZq60gNf-xiTbJM2qzbruqO1Ma5aK15tDzz1fk"}}

// webpush.sendNotification(pushSubscription, 'test message');
