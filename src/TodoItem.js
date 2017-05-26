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
          label={this.state.title}
          checked={this.state.checked}
          onChange={() => {this.onItemChanged()}}
        />
        <Text style={styles.categoryStyle}>{this.state.category}</Text>
      </View>
    )
  }

  onItemChanged(){
    this.setState({checked: true});
    this.props.onClick(this.state.id)
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
