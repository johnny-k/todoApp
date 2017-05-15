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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };
  }

  render() {
    return (
      <ListView
        style={{alignSelf: 'stretch'}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem label={rowData} checked='false' category='Other' removeTodo={this.removeTodo}>{rowData}</TodoItem>}
      />
    )
  }

  removeTodo(itemName){
    // Item aus der Datenbank entfernen
    console.log(itemName);
  }

  pullDatabase = new function (){
    AsyncStorage.getItem(DATABASE_KEY, (err, result) => {
          console.log(result);
          if(result !== null){
            data = JSON.parse(result);

            console.log(data);

            this.state = {
              dataSource: ds.cloneWithRows(this.props.todos),
            };
          }
        });
  }
}

const styles = StyleSheet.create({

});

export default TodoView;
