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
  Picker,
} from 'react-native';
import TodoView from './src/TodoView';
import AddView from './src/AddView';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class todoApp extends Component {

  constructor(props) {
      super(props);

    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.topElements, styles.topTitle]}>TODOS</Text>
          <Text style={[styles.topElements, styles.filter]}>...</Text>
        </View>
        <ScrollableTabView
          tabBarBackgroundColor='#212121'
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='grey'
          tabBarUnderlineStyle={styles.tabBar}
          onChangeTab={(tab) => this.onTabChanged(tab)}>  
          <TodoView tabLabel='TASK LIST' />
          <AddView tabLabel='ADD TASK' />
        </ScrollableTabView>
      </View>
    );
  }

  onTabChanged(tab){
    if(tab.i !== 0){
      return;
    }
    console.log('changed to tab 0');
  }

  onChooseFilter(value){
    console.log('choose filter '+ value);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f5fcff',
  },
  topElements:{
    color: 'white',
    backgroundColor: '#212121',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  top:{
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#212121',
  },
  topTitle:{
    flex: 1,
    alignSelf: 'flex-start',
  },
  filter:{
    flex: -1,
    transform: [{rotate: '90deg'}],
    alignSelf: 'flex-end',
  },
  tabBar:{
    backgroundColor: '#00bcd4',
    alignSelf: 'flex-start',
  },
  
});

AppRegistry.registerComponent('todoApp', () => todoApp);
