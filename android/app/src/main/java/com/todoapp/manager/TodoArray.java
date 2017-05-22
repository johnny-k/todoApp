package com.todoapp.manager;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.todoapp.database.Todo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Johnny on 22.05.2017.
 */

public class TodoArray implements ReadableArray
{
    List<Todo> list = new ArrayList<Todo>();

    public boolean add(Todo todo)
    {
        return list.add(todo);
    }

    public boolean remove(Todo todo)
    {
        return list.remove(todo);
    }

    public Todo remove (int index)
    {
        return list.remove(index);
    }

    public void clear()
    {
        list.clear();;
    }

    @Override
    public int size()
    {
        return list.size();
    }

    @Override
    public boolean isNull(int index)
    {
        return list.get(index) == null;
    }

    @Override
    public boolean getBoolean(int index)
    {
        return false;
    }

    @Override
    public double getDouble(int index)
    {
        return 0.0;
    }

    @Override
    public int getInt(int index)
    {
        return 0;
    }

    @Override
    public String getString(int index)
    {
        return null;
    }

    @Override
    public ReadableArray getArray(int index)
    {
        return null;
    }

    @Override
    public ReadableMap getMap(int index)
    {
        return list.get(index);
    }

    @Override
    public Dynamic getDynamic(int index)
    {
        return null;
    }

    @Override
    public ReadableType getType(int index)
    {
        return null;
    }
}
