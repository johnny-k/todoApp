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
    AsyncStorage
} from 'react-native';
import TodoView from './src/TodoView';
import AddView from './src/AddView';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const DATABASE_KEY = '@TodoStorage:todo';

export default class todoApp extends Component {

  constructor(props) {
      super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topTitle}>TODOS</Text>
        <ScrollableTabView
          tabBarBackgroundColor='#212121'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='grey'
          tabBarUnderlineStyle={styles.tab}>  
          <TodoView tabLabel='TASK LIST' />
          <AddView tabLabel='ADD TASK' />
        </ScrollableTabView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  topTitle:{
    alignSelf: 'stretch',
    color: 'white',
    backgroundColor: '#212121',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  tab:{
    backgroundColor: '#00bcd4'
  }
});

AppRegistry.registerComponent('todoApp', () => todoApp);
