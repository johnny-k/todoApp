import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  AsyncStorage
} from 'react-native';

import TodoItem from './TodoItem';

import ToDoManager from './ToDoManager';

class TodoView extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
    //this.removeTodo = this.removeTodo.bind(this);
  }

  render() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(this.state.todos);

    return (
      <ListView
        style={{alignSelf: 'stretch'}}
        dataSource={dataSource}
        renderRow={(rowData) => <TodoItem task={rowData}></TodoItem>}
      />
    )
  }

}

const styles = StyleSheet.create({

});

export default TodoView;
