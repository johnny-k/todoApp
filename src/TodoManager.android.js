'use strict';
/**
 * This exposes the native TodoManager module as a JS module.
 * This has the functions:
 * void add_todo(Todo todo)
 * List<Todo> get_todos()
 * void removeTodo(int id)
 * List<Todo> get_todos_by_category(String category)
 */
import { NativeModules } from 'react-native';
module.exports = NativeModules.ToDoManager;