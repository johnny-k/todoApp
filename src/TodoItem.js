import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CheckBox from 'react-native-checkbox';

class TodoItem extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.listItem}>
        <CheckBox
          label={this.props.label}
          checked={this.props.checked}
          onChange={(checked) => this.props.removeTodo(this.props.todo)}
        />
        <Text style={styles.categoryStyle}>{this.props.category}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  categoryStyle: {
    fontSize: 10,
    color: 'red',
    margin: 10,
  }
});

export default TodoItem;
