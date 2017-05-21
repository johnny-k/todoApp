package com.todoapp.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * TodoDatabaseHelper
 *
 * Author: Maik Hansen
 *
 * This class helps to handle database interaction. It extends SQLiteOpenHelper to create the needed
 * database + version and tables
 *
 */

public class TodoDatabaseHelper extends SQLiteOpenHelper {

    /* constructor gets context, database name and version */
    public TodoDatabaseHelper(Context context) {
        super(context, TodoContract.DB_NAME, null, TodoContract.DB_VERSION);
    }

    /* create the table */
    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTable = "CREATE TABLE " + TodoContract.TodoEntry.TABLE + " ( " +
                TodoContract.TodoEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                TodoContract.TodoEntry.COL_TODO_TITLE + " TEXT NOT NULL, " +
                TodoContract.TodoEntry.COL_TODO_CATEGORY + " TEXT NOT NULL, " +
                TodoContract.TodoEntry.COL_TODO_STATE + " INT NOT NULL);";

        db.execSQL(createTable);
    }

    /* if version changed drop old table and recreate new */
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TodoContract.TodoEntry.TABLE);
        onCreate(db);
    }
}
