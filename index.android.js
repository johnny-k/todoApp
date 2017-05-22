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
    //<TodoView tabLabel ='TaskView' todos={['Eintrag 1', 'Eintrag 2', 'Eintrag 3']}/>
    return (
      <View style={styles.container}>
        <Text style={styles.topTitle}>TODOS</Text>
        <ScrollableTabView
          tabBarBackgroundColor='black'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='grey'
          tabBarUnderlineStyle={styles.tab}>  
          <TodoView tabLabel='TASK LIST' />
          <AddView tabLabel='ADD TASK'
           />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tab:{
    backgroundColor: 'lightblue'
  }
});

AppRegistry.registerComponent('todoApp', () => todoApp);
