//
//  Todos.swift
//  Todos
//
//  Created by Maik Hansen on 18.12.16.
//  Copyright © 2016 Maik Hansen. All rights reserved.
//

import Foundation

class Todo{
    /* vars */
    let id: Int64?
    var title: String
    var category: String
    
    /* init only with id */
    init(id: Int64){
        self.id = id
        title = ""
        category = ""
    }
    
    /* init with all */
    init(id: Int64, title: String, category: String){
        self.id = id
        self.title = title
        self.category = category
    }
}
