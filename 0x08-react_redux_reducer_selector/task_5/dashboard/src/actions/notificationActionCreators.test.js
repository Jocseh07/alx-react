import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  MARK_AS_READ,
  SET_NOTIFICATION_FILTER,
} from './notificationActionTypes';
import { NotificationTypeFilters } from '../constants/notificationTypeFilters';

describe('notificationActionCreators', () => {
  it('markAsRead should create an action to mark a notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter should create an action to set the notification filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_NOTIFICATION_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
