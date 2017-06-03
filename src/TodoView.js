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
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
          dataSource : this.state.dataSource.cloneWithRows(newData),
          db :newData,
        });
      })
      .catch(err =>{
        console.error('failed to load todos '+ err);
    });
  }

  removeTask(id){
    console.log('remove task with ID '+ id);

    ToDoManager.remove_todo(id)
      .then(newData => {
        setTimeout(() => {
          var data = [];
          data = this.state.db.slice();

          var index = data.indexOf(data.find((item) => item.id === id));
          data.splice(index, 1);

          this.setState({
            dataSource : this.state.dataSource.cloneWithRows(data),
            db : data,
          });

          ToastAndroid.show("Todo finished", ToastAndroid.SHORT);
        }, 300);
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
