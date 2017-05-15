/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import TodoItem from './src/todoItem';

export default class todoApp extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['Eintrag 1', 'Eintrag 2', 'Eintrag 3']),
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topTitle}>TODOS</Text>
        <ListView
        style={{alignSelf: 'stretch'}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem label={rowData} checked='false' category='Other'>{rowData}</TodoItem>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topTitle:{
    alignSelf: 'stretch',
    color: 'white',
    backgroundColor: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
});

AppRegistry.registerComponent('todoApp', () => todoApp);
