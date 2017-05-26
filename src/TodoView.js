import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ToastAndroid
} from 'react-native';

import TodoItem from './TodoItem';

import ToDoManager from './ToDoManager';

class TodoView extends Component{
  constructor(props){
    super(props);

    this.state = {
      todos: []
    };
    this.loadTodos();
  }

  render() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(this.state.todos);

    return (
      <ListView enableEmptySections={true}
        style={{alignSelf: 'stretch'}}
        dataSource={dataSource}
        renderRow={(rowData) => <TodoItem task={rowData}
        onClick={this.removeTask}></TodoItem>}
      />
    )
  }

  loadTodos(){
    ToDoManager.get_todos()
      .then(data =>{
        if(! data){
          data = [];
        }
        this.setState({todos : data});
      })
      .catch(err =>{
        console.error('failed to load todos');
    });
  }

  removeTask(id){
    console.log('remove task with ID '+ id);

    ToDoManager.remove_todo(id)
      .then(data => {
        setTimeout(() => {
          ToastAndroid.show("Todo finished", ToastAndroid.SHORT);
        }, 500);
      })
      .catch(err => {

      });
  }

}

const styles = StyleSheet.create({

});

export default TodoView;
