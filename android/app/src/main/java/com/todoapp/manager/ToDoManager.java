package com.todoapp.manager;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.todoapp.database.Todo;
import com.todoapp.database.TodoContract;
import com.todoapp.database.TodoDatabaseHelper;

/**
 * ToDoManager
 * <p>
 * Author: Maik Hansen
 * <p>
 * This class handles the database functions of the todos.
 */

public class ToDoManager extends ReactContextBaseJavaModule
{

    /* declare class variables */
    private TodoDatabaseHelper helper = null;
    private SQLiteDatabase database = null;

    /* constructor with init database */
    public ToDoManager(ReactApplicationContext context)
    {
        super(context);
        init_database(context);
    }

    @Override
    public String getName()
    {
        return "ToDoManager";
    }

    /* create database access */
    private void init_database(Context context)
    {
        if (helper == null)
        {
            helper = new TodoDatabaseHelper(context);
        }
    }

    /* add to do to database */
    public void add_todo(Todo todo)
    {
        /* open writable access to database */
        database = helper.getWritableDatabase();

        /* set the values - column, value */
        ContentValues values = new ContentValues();
        values.put(TodoContract.TodoEntry.COL_TODO_TITLE, todo.getTodoTitle());
        values.put(TodoContract.TodoEntry.COL_TODO_CATEGORY, todo.getTodoCategory());
        values.put(TodoContract.TodoEntry.COL_TODO_STATE, todo.getTodoState());

        /* insert to db and close connection */
        database.insert(TodoContract.TodoEntry.TABLE, null, values);
        database.close();
    }

    /* get all todos from database */
    @ReactMethod
    public ReadableArray get_todos()
    {
        /* new array list with todos */
        ReadableMapList<Todo> todos = new ReadableMapList<>();


        /* create sql query */
        String sql = "SELECT * FROM " + TodoContract.TodoEntry.TABLE;

        /* open readable access */
        database = helper.getReadableDatabase();

        /* set moving cursor to rows in query */
        Cursor cursor = database.rawQuery(sql, null);

        /* move through the rows */
        if (cursor.moveToFirst())
        {

            /* while there are rows add the todo to the array list */
            do
            {

                Todo todo = new Todo();
                todo.setTodoID(cursor.getInt(0));
                todo.setTodoTitle(cursor.getString(1));
                todo.setTodoCategory(cursor.getString(2));
                todo.setTodoState(cursor.getInt(3));
                todos.add(todo);
            } while (cursor.moveToNext());
        }

        /* close database connection and cursor */
        database.close();
        cursor.close();

        /* return todos */
        return todos;
    }

    /* remove todo from database */
    @ReactMethod
    public void removeTodo(int id)
    {
        /* get writable access */
        database = helper.getWritableDatabase();

        /* create query */
        String sql = "DELETE FROM " + TodoContract.TodoEntry.TABLE + " WHERE _id = " + id;

        /* exec query and close connection */
        database.execSQL(sql);
        database.close();
    }

    /* get todos by given category */
    @ReactMethod
    public ReadableArray get_todos_by_category(String category)
    {
        /* new array list of todos */
        ReadableMapList<Todo> todos = new ReadableMapList<>();

        /* create query - if all select all */
        String sql;
        if (!category.equals("All"))
        {
            sql = "SELECT * FROM " + TodoContract.TodoEntry.TABLE + " WHERE todo_category = \"" + category + "\"";
        } else
        {
            sql = "SELECT * FROM " + TodoContract.TodoEntry.TABLE;
        }

        /* get readable access and set cursor to query */
        database = helper.getReadableDatabase();
        Cursor cursor = database.rawQuery(sql, null);

        /* move through the rows */
        if (cursor.moveToFirst())
        {

            /* while there are rows add todo to list */
            do
            {
                Todo todo = new Todo();
                todo.setTodoID(cursor.getInt(0));
                todo.setTodoTitle(cursor.getString(1));
                todo.setTodoCategory(cursor.getString(2));
                todo.setTodoState(cursor.getInt(3));
                todos.add(todo);
            } while (cursor.moveToNext());
        }

        /* close connection and cursor */
        database.close();
        cursor.close();

        /* return list */
        return todos;
    }
}
