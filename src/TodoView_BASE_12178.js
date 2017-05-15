import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import TodoItem from './TodoItem';

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
        renderRow={(rowData) => <TodoItem label={rowData} checked='false' category='Other'>{rowData, this.removeTodo}</TodoItem>}
      />
    )
  }

  removeTodo(itemName){
    // Item aus der Datenbank entfernen
    console.log(itemName);
  }
}

const styles = StyleSheet.create({

});

export default TodoView;
