package com.todoapp.manager;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.todoapp.database.Todo;

import java.util.ArrayList;
import java.util.List;

/**
 * Generic interface for a ReadableArray containing ReadableMap elements.
 * Basic List operations are provided.
 *
 * Created by Johnny on 22.05.2017.
 */

public class ReadableMapList<T extends ReadableMap> implements ReadableArray
{
    List<T> list = new ArrayList<>();

    public boolean add(T e)
    {
        return list.add(e);
    }

    public boolean remove(T e)
    {
        return list.remove(e);
    }

    public T remove (int index)
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
