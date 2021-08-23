// self.addEventListener('push', () => {
//     self.registeration.sendNotification("test message", {});
// });

self.addEventListener('push', function(e) {
    var options = {
      body: e.payload.text,
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    console.log(e.payload.text);
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  });
  