package com.todoapp.database;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;

import java.util.Arrays;
import java.util.List;

/**
 * Todo
 * <p>
 * Author: Maik Hansen
 * <p>
 * This class provides the todo data.
 */

public class Todo implements ReadableMap
{

    public static final String KEY_ID = "id";
    public static final String KEY_TITLE = "title";
    public static final String KEY_CATEGORY = " category";
    public static final String KEY_STATE = "state";

    /* declare class variables */
    private String todo_title;
    private String todo_category;
    private int todo_state;
    private int todo_id;

    /* empty constructor for database get calls */
    public Todo()
    {
        this.todo_title = null;
        this.todo_category = null;
        this.todo_state = 0;
    }

    /* constructor with params for database insert calls */
    public Todo(String todo_title, String todo_category, int todo_state)
    {
        /* set the given data */
        super();
        this.todo_title = todo_title;
        this.todo_category = todo_category;
        this.todo_state = todo_state;
    }

    /* returns todo id*/
    public int getTodoID()
    {
        return todo_id;
    }

    /* sets todo id */
    public void setTodoID(int id)
    {
        this.todo_id = id;
    }

    /* returns todo title */
    public String getTodoTitle()
    {
        return todo_title;
    }

    /* sets todo title */
    public void setTodoTitle(String title)
    {
        this.todo_title = title;
    }

    /* return todo category */
    public String getTodoCategory()
    {
        return todo_category;
    }

    /* sets todo category */
    public void setTodoCategory(String category)
    {
        this.todo_category = category;
    }

    /* return todo state */
    public int getTodoState()
    {
        return todo_state;
    }

    /* set todo state */
    public void setTodoState(int state)
    {
        this.todo_state = state;
    }

    @Override
    public boolean hasKey(String name)
    {
        switch (name)
        {
            case KEY_ID: // fall through
            case KEY_TITLE: // fall through
            case KEY_CATEGORY: // fall through
            case KEY_STATE: // fall through
                return true;
            default:
                return false;
        }
    }

    @Override
    public boolean isNull(String name)
    {
        switch (name)
        {
            case KEY_ID: // fall through
            case KEY_STATE:
                return false;
            case KEY_TITLE:
                return todo_title == null;
            case KEY_CATEGORY:
                return todo_category == null;
            default:
                return true;
        }
    }

    @Override
    public boolean getBoolean(String name)
    {
        return false;
    }

    @Override
    public double getDouble(String name)
    {
        switch (name)
        {
            case KEY_ID:
                return (double)todo_id;
            case KEY_STATE:
                return (double)todo_state;

            case KEY_TITLE:
            case KEY_CATEGORY:
            default:
                return 0.0;
        }
    }

    @Override
    public int getInt(String name)
    {
        switch (name)
        {
            case KEY_ID:
                return todo_id;
            case KEY_STATE:
                return todo_state;

            case KEY_TITLE:
            case KEY_CATEGORY:
            default:
                return 0;
        }
    }

    @Override
    public String getString(String name)
    {
        switch (name)
        {
            case KEY_ID:
                return Integer.toString(todo_id);
            case KEY_STATE:
                return Integer.toString(todo_state);
            case KEY_TITLE:
                return todo_title;
            case KEY_CATEGORY:
                return todo_category;
            default:
                return null;
        }
    }

    @Override
    public ReadableArray getArray(String name)
    {
        return null;
    }

    @Override
    public ReadableMap getMap(String name)
    {
        return null;
    }

    @Override
    public Dynamic getDynamic(String name)
    {
        return null;
    }

    @Override
    public ReadableType getType(String name)
    {
        switch (name)
        {
            case KEY_ID:
                return ReadableType.Number;
            case KEY_TITLE:
                return ReadableType.Number;
            case KEY_CATEGORY:
                return ReadableType.String;
            case KEY_STATE:
                return ReadableType.String;
            default:
                return null;
        }
    }

    @Override
    public ReadableMapKeySetIterator keySetIterator()
    {
        return null;
    }
}
