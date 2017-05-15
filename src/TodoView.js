import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  AsyncStorage
} from 'react-native';
import TodoItem from './TodoItem';

const DATABASE_KEY = '@TodoStorage:todo';

class TodoView extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
    this.removeTodo = this.removeTodo.bind(this);
  }

  render() {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(this.props.todos);

    return (
      <ListView
        style={{alignSelf: 'stretch'}}
        dataSource={dataSource}
        renderRow={(rowData) => <TodoItem label={rowData} checked={false} category='Other' removeTodo={this.removeTodo}>{rowData}</TodoItem>}
      />
    )
  }

  removeTodo(itemName){
    AsyncStorage.getItem(DATABASE_KEY, (err, result) => {
      let data = [];
      if(result !== null){
        data = JSON.parse(result);
        let removableIndex = -1;
        for (let i = 0; i < data.length; i++){
          if(data[i] === itemName){
            removableIndex = i;
          }
        }
        if (removableIndex >= 0){
          data.splice(removableIndex, 1);
        }
        AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(data), (error, result) => {
          this.props.refreshTodos();
          console.log(result);
          console.log(error);
          console.log(JSON.stringify(error));
        });
      }
    });

    // Item aus der Datenbank entfernen
    console.log(itemName);
  }

}

const styles = StyleSheet.create({

});

export default TodoView;
