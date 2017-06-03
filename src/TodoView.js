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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
  return r1 !== r2
}});

class TodoView extends Component{

  constructor(props){
    super(props);

    this.state = {
      dataSource : ds.cloneWithRows([]),
      db : [],
    };

    this.loadTodos = this.loadTodos.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.loadTodos();
  }

  renderRow(rowData){
    return (
      <TodoItem task={rowData}
        onClick={this.removeTask}>
      </TodoItem>
    )
  }

  render() {
    return (
      <ListView enableEmptySections={true}
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }

  loadTodos(){
    console.log('loadTodos');

    ToDoManager.get_todos()
      .then(newData =>{
        if(! newData){
          newData = [];
        }

        this.setState({
          dataSource : ds.cloneWithRows(newData),
          db :newData,
        });
      })
      .catch(err =>{
        console.error('failed to load todos '+ err);
    });
  }

  removeTask(taskId){
    console.log('remove task with ID '+ taskId);

    ToDoManager.remove_todo(taskId)
      .then(newData => {
        var newDb = this.state.db.slice();
        var index = newDb.indexOf(newDb.find((item) => item.id === taskId));
        newDb.splice(index, 1);

        this.setState({
          dataSource : this.state.dataSource.cloneWithRows(newDb),
        });

        ToastAndroid.show("Todo finished", ToastAndroid.SHORT);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const styles = StyleSheet.create({
  listView:{
    alignSelf: 'stretch',
  },
});

export default TodoView;
