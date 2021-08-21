var push = require('web-push');

// let vapidKey = push.generateVAPIDKeys();

// console.log(vapidKey);

let vapidKeys = {
    publicKey: 'BGteWm_PDDXbsk__NfxG8PGnADqy5h0oV5XIJLGZPXYtkkIrW6PY85zd2uO_BMFn00H5skg3q24xCHAn8cUjy3U',
    privateKey: 'AqW0L5w-5usyfDIKe50qfuFu1DGPMkuUgxErwk__wkw'
}

push.setVapidDetails('mailto:developer@yethiha.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhI…twZcUDrlWce0rwPO0GdUYGgk__jPwm52Nt5Z56hN4XDPxsWPBXQtUyyWyNrg",
    "keys":{"auth":"0Z_gRf0LYvVsvXIZsz5xBQ","p256dh":"BLuc0OjcOjiwpfW3KTfnQNyK1YiWgK7An83EmuaVNlHUNd4f_XZq60gNf-xiTbJM2qzbruqO1Ma5aK15tDzz1fk"}
};

push.sendNotification(sub, 'test message')