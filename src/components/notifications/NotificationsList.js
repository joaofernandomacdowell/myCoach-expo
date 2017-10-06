import React, { Component } from 'react';
import { ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { listStyles, listItemStyles } from '../../styles/notifications';
import data from './example.json';


class NotificationsList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  renderRow(record) {
    const { listItemContainer, title } = listItemStyles;
    return (
      <ListItem
        key={record.id}
        title={record.title}
        titleStyle={title}
        containerStyle={listItemContainer}
        subtitle={record.subtitle}
      />
    );
  }

  render() {
    const { mainContainer } = listStyles;
    return (
      <List style={mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </List>
    );
  }
}

export default NotificationsList;
