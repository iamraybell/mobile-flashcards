import React from 'react';
import {  Permissions, NOTIFICATIONS } from 'expo';
import { AsyncStorage } from 'react-native';

const KEY = 'Flashcards:Notifications';

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(KEY)
    .then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

function createNotifications() {
    return {
        title: 'Daily quiz reminder',
        body: 'Make sure you take your quiz for the day!!',
        ios: {
            sound: true
        },
    };
}

export function setNotifications() {
    AsyncStorage.getItem(KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(status => {
                        if (status === 'granted') {
                            // console.log('it was granted')
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let date = new Date();
                            date.setDate(date.getDate() + 1);
                            date.setHours(8);
                            date.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(createNotifications(), {
                                time: date,
                                repeat: 'day'
                            });

                            AsyncStorage.setItem(KEY, JSON.stringify(true));
                        }
                    });
            }
        });
}