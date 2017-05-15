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
  }

  render() {
    return (
      <ListView
      tabLabel = "TASK LIST"
      style={{alignSelf: 'stretch'}}
      dataSource={this.props.todos}
      renderRow={(rowData) => <TodoItem label={rowData} checked='false' category='Other'>{rowData}</TodoItem>}
      />
    )
  }
}

const styles = StyleSheet.create({

});

export default TodoView;
