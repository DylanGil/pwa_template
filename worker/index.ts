"use strict";

self.addEventListener("push", (event: PushEvent) => {
  console.log("push event", event);
  
  if (!event.data) {
    return;
  }
  const data = JSON.parse(event?.data.text());
  console.log(event)
  event.waitUntil(
    registration.showNotification(data.title, {
      body: data.message,
    })
  );
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
            }
          }
          return client.focus();
        }
        return clients.openWindow("/");
      })
  );
});
