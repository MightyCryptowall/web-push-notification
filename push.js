var push = require('web-push');

// let vapidKey = push.generateVAPIDKeys();

// console.log(vapidKey);

let vapidKeys = {
    publicKey: 'BGteWm_PDDXbsk__NfxG8PGnADqy5h0oV5XIJLGZPXYtkkIrW6PY85zd2uO_BMFn00H5skg3q24xCHAn8cUjy3U',
    privateKey: 'AqW0L5w-5usyfDIKe50qfuFu1DGPMkuUgxErwk__wkw'
}

push.setVapidDetails('mailto:developer@yethiha.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message')