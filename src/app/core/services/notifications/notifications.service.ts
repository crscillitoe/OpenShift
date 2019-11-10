import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Provides functions for easily accessing/sending
 * notifications to the user from the sub-tabs.
 */
export class NotificationsService {

  public notifications: BehaviorSubject<{
    ApplicationID: number,
    Notifications: Notification[]
  }>;

  private _notifications: {
    [ApplicationID: number]: Notification[]
  } = {};

  /**
   * Notifies the user of a notification in
   * one of the sub apps.
   *
   * @param ApplicationID The ID of the application sending the notification
   * @param Notification (Optional) Notification message to display to the user
   */
  public sendNotification(ApplicationID: number, Notification: Notification = null): void {
    // TODO
  }

  constructor() { }
}
