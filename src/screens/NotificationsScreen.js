import React, { Component } from 'react';
import { View } from 'react-native';
import { ScreenStyles } from '../styles/constants';

import NotificationsList from '../components/notifications/NotificationsList';


class NotificationsScreen extends Component {
  render() {
    return (
      <View style={ScreenStyles}>
        <NotificationsList />
      </View>
    );
  }
}

export default NotificationsScreen;
