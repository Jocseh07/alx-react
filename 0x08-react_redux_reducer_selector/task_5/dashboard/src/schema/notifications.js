import { schema, normalize } from "normalizr";
import * as notificationsData from "../../notifications.json";

export const user = new schema.Entity("users");

export const message = new schema.Entity(
  "messages",
  {},
  { idAttribute: "guid" }
);

export const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  return Object.values(notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => messages[notification.context]);
};

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};
