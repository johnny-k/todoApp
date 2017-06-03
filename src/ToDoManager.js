'use strict';
/**
 * This exposes the native TodoManager module as a JS module.
 * This has the functions:
 * 
 * add_todo(todo, promise)
 * get_todos(promise)
 * remove_todo(id, promise)
 * get_todos_by_category(category, promise)
 */
import { NativeModules } from 'react-native';
module.exports = NativeModules.ToDoManager;