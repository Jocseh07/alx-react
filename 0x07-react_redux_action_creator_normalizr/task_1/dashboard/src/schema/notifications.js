import { schema } from 'normalizr';
import * as notifications from '../../notifications.json';

export const user = new schema.Entity('users');

export const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' },
);

export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};
