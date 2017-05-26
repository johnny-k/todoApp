package com.todoapp.manager;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
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
    @ReactMethod
    public void add_todo(ReadableMap rm, Promise promise)
    {
        try
        {
            Todo todo = new Todo();
            todo.setTodoTitle(rm.hasKey(Todo.KEY_TITLE) ? rm.getString(Todo.KEY_TITLE) : null);
            todo.setTodoCategory(rm.hasKey(Todo.KEY_CATEGORY) ? rm.getString(Todo.KEY_CATEGORY) : null);
            todo.setTodoState(rm.hasKey(Todo.KEY_STATE) ? rm.getInt(Todo.KEY_STATE) : 0);

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

            promise.resolve(null);
        } catch (Exception ex)
        {
            promise.reject(ex.getCause());
        }
    }

    /* get all todos from database */
    @ReactMethod
    public void get_todos(Promise promise)
    {
        try
        {
            /* new array list with todos */
            WritableArray todos = new WritableNativeArray();

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
                    WritableMap todo = new WritableNativeMap();
                    todo.putInt(Todo.KEY_ID, cursor.getInt(0));
                    todo.putString(Todo.KEY_TITLE, cursor.getString(1));
                    todo.putString(Todo.KEY_CATEGORY, cursor.getString(2));
                    todo.putInt(Todo.KEY_STATE, cursor.getInt(3));
                    todos.pushMap(todo);
                } while (cursor.moveToNext());
            }

            /* close database connection and cursor */
            database.close();
            cursor.close();

            /* return todos */
            promise.resolve(todos);
        } catch (Exception ex)
        {
            promise.reject(ex.getCause());
        }
    }

    /* remove todo from database */
    @ReactMethod
    public void remove_todo(int id, Promise promise)
    {
        try
        {
            /* get writable access */
            database = helper.getWritableDatabase();

            /* create query */
            String sql = "DELETE FROM " + TodoContract.TodoEntry.TABLE + " WHERE _id = " + id;

            /* exec query and close connection */
            database.execSQL(sql);
            database.close();

            promise.resolve(null);
        } catch (Exception ex)
        {
            promise.reject(ex.getCause());
        }
    }

    /* get todos by given category */
    @ReactMethod
    public void get_todos_by_category(String category, Promise promise)
    {
        try
        {
            /* new array list of todos */
            WritableArray todos = new WritableNativeArray();

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
                    WritableMap todo = new WritableNativeMap();
                    todo.putInt(Todo.KEY_ID, cursor.getInt(0));
                    todo.putString(Todo.KEY_TITLE, cursor.getString(1));
                    todo.putString(Todo.KEY_CATEGORY, cursor.getString(2));
                    todo.putInt(Todo.KEY_STATE, cursor.getInt(3));
                    todos.pushMap(todo);
                } while (cursor.moveToNext());
            }

            /* close connection and cursor */
            database.close();
            cursor.close();

            /* return list */
            promise.resolve(todos);
        } catch (Exception ex)
        {
            promise.reject(ex.getCause());
        }
    }
}
