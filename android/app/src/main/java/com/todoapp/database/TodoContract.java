package com.todoapp.database;

import android.provider.BaseColumns;

/**
 * TodoContract
 *
 * Author: Maik Hansen
 *
 * This class provides the database information
 *
 */

public class TodoContract {

    /* name and version */
    public static final String DB_NAME = "com.thesis.masen.todomanager.db";
    public static final int DB_VERSION = 5;

    /* table columns */
    public class TodoEntry implements BaseColumns {
        public static final String TABLE = "todo_manager";
        public static final String COL_TODO_TITLE = "todo_title";
        public static final String COL_TODO_CATEGORY = "todo_category";
        public static final String COL_TODO_STATE = "todo_state";
    }
}
