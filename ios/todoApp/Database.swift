//
//  Database.swift
//  Todos
//
//  Created by Maik Hansen on 27.12.16.
//  Copyright © 2016 Maik Hansen. All rights reserved.
//

import Foundation
import SQLite

class Database{
    /* vars */
    static let instance = Database()
    private var db: Connection?
    private let todos = Table("todos")
    private let id = Expression<Int64>("id")
    private let title = Expression<String?>("title")
    private let category = Expression<String>("category")

    /* init function */
    init(){
        self.connection();
    }
    
    /* establish connection */
    private func connection(){
        /* search the database file in directories */
        let path = NSSearchPathForDirectoriesInDomains(
            .documentDirectory, .userDomainMask, true
            ).first!
        
        /* try to establish connection */
        do {
            db = try Connection("\(path)/TodoBase.sqlite3")
        } catch {
            db = nil
            print ("Unable to open database")
        }
        
        self.createTables();
    }
    
    /* create tables */
    private func createTables(){
        /* do only if the db var is not false */
        do {
            try db!.run(todos.create(ifNotExists: true) { table in
                table.column(id, primaryKey: true)
                table.column(title)
                table.column(category)
            })
        } catch {
            print("Unable to create table")
        }
    }
    
    /* add todo function */
    public func addTodo(todoTitle: String, todoCategory: String) -> Int64? {
        /* try to insert row and throw exception if failed */
        do {
            let insert = todos.insert(title <- todoTitle, category <- todoCategory)
            let id = try db!.run(insert)
            
            return id
        } catch {
            print("Insert failed")
            return -1
        }
    }
    
    /* delete todo function */
    public func deleteTodo(todoId: Int64) -> Bool {
        /* try to delete handle exception */
        do {
            let todo = todos.filter(id == todoId)
            try db!.run(todo.delete())
            return true
        } catch {
            print("Delete failed")
        }
        return false
    }
    
    /* get all todos */
    func getTodos() -> [Todo] {
        var todos = [Todo]()
        
        do {
            for todo in try db!.prepare(self.todos) {
                todos.append(Todo(
                id: todo[id],
                title: todo[title]!,
                category: todo[category]))
            }
        } catch {
            print("Select failed")
        }
        
        return todos
    }
    
    /* get all todos */
    func getFilteredTodos(todoCategory: String) -> [Todo] {
        var todos = [Todo]()
        
        do {
            for todo in try db!.prepare(self.todos.filter(category == todoCategory)) {
                todos.append(Todo(
                    id: todo[id],
                    title: todo[title]!,
                    category: todo[category]))
            }
        } catch {
            print("Select failed")
        }
        
        return todos
    }

    
}
