import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Button,
  View,
  ToastAndroid
} from 'react-native';

import ToDoManager from './ToDoManager';


class AddView extends Component{

  constructor(props){
    super(props);
    this.state = {
        title: '',
        type: 'other'
    };
  }

  render(){
    return (
      <View>
        <View style={styles.titleSection}>
          <Text style={styles.title}>ADD NEW TODO</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.h1}>Todo title</Text>
          <TextInput onChangeText={(text) => this.setState({title: text})} value={this.state.text} />
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.h1}> Todo category </Text>
          <Picker selectedValue={this.state.type} onValueChange={(type) => this.setState({type: type})}>
            <Picker.Item label="Other" value="other" />
            <Picker.Item label="Shopping" value="shopping" />
            <Picker.Item label="Study" value="study" />
            <Picker.Item label="Work" value="work" />
            <Picker.Item label="Reminder" value="reminder" />
          </Picker>
        </View>

        <View style={styles.addSection}>
          <Button onPress={(event) => {this.addTask(this.state.title, this.state.type)}}
          title="ADD TODO"
          accessibilityLabel="Adds the current task to your list"
          color='lightgrey'/>
        </View>
      </View>
    )  
}

  addTask(title, type){
    let todo = {
      'title' : title,
      'category' : type,
      'state' : 0
    };

    ToDoManager.add_todo(todo)
      .then(data => {
        ToastAndroid.show('added: '+ title, ToastAndroid.SHORT);
      })
      .catch(err => {
        ToastAndroid.show('failed to add: '+ title, ToastAndroid.SHORT);
      });
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 36,
    textAlign: 'left',
    margin: 10,
    color: 'black',
  },
  h1: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  addSection:{
    margin: 20
  }
});

export default AddView;
