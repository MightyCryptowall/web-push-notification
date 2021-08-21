self.addEventListener('push', () => {
    self.registeration.sendNotification("test message", {});
});