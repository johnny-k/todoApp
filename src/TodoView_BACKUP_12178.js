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
<<<<<<< HEAD
      <ListView style={{alignSelf: 'stretch'}}
=======
      <ListView
        style={{alignSelf: 'stretch'}}
>>>>>>> 08da93afb569d640f507dd60d37acc875a0cabd0
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem label={rowData} checked='false' category='Other' removeTodo={this.removeTodo}>{rowData}</TodoItem>}
      />
    )
  }

  removeTodo(itemName){
    // Item aus der Datenbank entfernen
    console.log(itemName);
  }

  pullDatabase (){
    try {
      const value = AsyncStorage.getItem(DATABASE_KEY);
      if(value !== null) {
        console.log('pulled from DB' + JSON.parse(value));
      }
    } catch(error) {
      console.error('error '+ error);
    }
  }
}

const styles = StyleSheet.create({

});

export default TodoView;
