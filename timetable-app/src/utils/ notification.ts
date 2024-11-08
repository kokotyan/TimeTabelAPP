// notification.ts

export const sendNotification = (title: string, message: string): void => {
    if (Notification.permission === "granted") {
      new Notification(title, { body: message });
    }
  };
  