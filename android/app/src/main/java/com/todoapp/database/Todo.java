package com.todoapp.database;

/**
 * Todo
 *
 * Author: Maik Hansen
 *
 * This class provides the todo data.
 *
 */

public class Todo {

    /* declare class variables */
    private String todo_title;
    private String todo_category;
    private int todo_state;
    private int todo_id;

    /* empty constructor for database get calls */
    public Todo(){
        this.todo_title = null;
        this.todo_category = null;
        this.todo_state = 0;
    }

    /* constructor with params for database insert calls */
    public Todo(String todo_title, String todo_category, int todo_state){
        /* set the given data */
        super();
        this.todo_title = todo_title;
        this.todo_category = todo_category;
        this.todo_state = todo_state;
    }

    /* returns todo id*/
    public int getTodoID(){
        return todo_id;
    }

    /* sets todo id */
    public void setTodoID(int id){
        this.todo_id = id;
    }

    /* returns todo title */
    public String getTodoTitle(){
        return todo_title;
    }

    /* sets todo title */
    public void setTodoTitle(String title){
        this.todo_title = title;
    }

    /* return todo category */
    public String getTodoCategory(){
        return todo_category;
    }

    /* sets todo category */
    public void setTodoCategory(String category){
        this.todo_category = category;
    }

    /* return todo state */
    public int getTodoState(){
        return todo_state;
    }

    /* set todo state */
    public void setTodoState(int state){
        this.todo_state = state;
    }
}
