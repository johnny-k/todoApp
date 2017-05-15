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
  View
} from 'react-native';
import TodoView from './src/TodoView';
import AddView from './src/AddView';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class todoApp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        // todos = [{id: 1, name: 'Homework', category: 'Study'}]
        todos: ['Todo 1', 'Todo 2', 'Todo 3'],
      }
    }

  render() {
    //<TodoView tabLabel ='TaskView' todos={['Eintrag 1', 'Eintrag 2', 'Eintrag 3']}/>
    return (
      <View style={styles.container}>
        <Text style={styles.topTitle}>TODOS</Text>
        <ScrollableTabView
          onChangeTab={(ev) => this._onTabChanged(ev)}>
          <TodoView tabLabel='TASK LIST' todos={this.state.todos} />
          <AddView tabLabel='ADD TASK' todos={this.state.todos} />
        </ScrollableTabView>
      </View>
    );
  }

  _onTabChanged(ev) {
    if(ev['i'] === 0){
      console.log(ev['ref']);
      ev['ref'].pullDatabase();
    }
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
});

AppRegistry.registerComponent('todoApp', () => todoApp);
