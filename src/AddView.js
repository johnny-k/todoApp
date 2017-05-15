import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Button,
  View,
} from 'react-native';

class AddView extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'addTodo',
      todo: '',
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
          <TextInput onChangeText={(todo) => this.setState({todo: todo})} value={this.state.text} />
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
          <Button onPress={(event) => {this.addTask(this.state.todo, this.state.type)}}
          title="ADD TODO"
          accessibilityLabel="Adds the current task to your list"
          style={{color: 'grey',}}/>
        </View>
      </View>
    )
  }
  addTask(todo, type) {
    // Push in die Datenbank
    console.log(todo + ' ' + type);
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    textAlign: 'left',
  },
  h1: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
});

export default AddView;
