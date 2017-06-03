import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import CheckBox from 'react-native-checkbox';

class TodoItem extends Component{
  constructor(props){
    super(props);

    this.state = {
      id : this.props.task['id'],
      title: this.props.task['title'],
      category: this.props.task['category'],
      checked: this.props.task['state'] == 0 ? false : true
    };
  }

  render() {
    return (
      <View style={styles.listItem}>
        <CheckBox
          label={this.props.task.title}
          checked={this.state.checked}
          onChange={() => {this.onItemChanged()}}
        />
        <Text style={styles.categoryStyle}>{this.props.task.category}</Text>
      </View>
    )
  }

  onItemChanged(){
    this.props.onClick(this.props.task.id)
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
