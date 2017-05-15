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

      this.state = {
        // todos = [{id: 1, name: 'Homework', category: 'Study'}]
        todos: ['Todo 1', 'Todo 2', 'Todo 3'],
      };
      this.setTodos = this.setTodos.bind(this);
      this.getTodos = this.getTodos.bind(this);
      this.refreshTodos = this.refreshTodos.bind(this);
      this.refreshTodos();
    }

  render() {
    //<TodoView tabLabel ='TaskView' todos={['Eintrag 1', 'Eintrag 2', 'Eintrag 3']}/>
    return (
      <View style={styles.container}>
        <Text style={styles.topTitle}>TODOS</Text>
        <ScrollableTabView
          onChangeTab={(ev) => this._pullDatabase(ev)}>
          <TodoView tabLabel='TASK LIST' todos={this.state.todos} refreshTodos={this.refreshTodos}/>
          <AddView tabLabel='ADD TASK' todos={this.state.todos} />
        </ScrollableTabView>
      </View>
    );
  }

  setTodos(todos){
    this.setState({
        todos: todos
    });
  }

  getTodos(){
    return this.state.todos;
  }

  refreshTodos(){
    AsyncStorage.getItem(DATABASE_KEY, (err, result) => {
        console.log(result);
        if(result !== null){

          data = JSON.parse(result);
          console.log(data);

          this.setTodos(data);
        }
      });
  }

  _pullDatabase (ev){
    if(ev['i'] === 0){
      this.refreshTodos();
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
