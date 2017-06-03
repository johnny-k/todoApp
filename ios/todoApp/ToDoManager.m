// ToDoManager.m

@implementation ToDoManager

// To export a module named ToDoManager
RCT_EXPORT_MODULE();

 * add_todo(todo, promise)
 * get_todos(promise)
 * remove_todo(id, promise)
 * get_todos_by_category(category, promise)

RCT_EXPORT_METHOD(add_todo:(NSDictionary)todo
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    Database.instance.addTodo(todoTitle: todoTitle, todoCategory: todoCategory);
}

RCT_EXPORT_METHOD(get_todos:
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    return Database.instance.getTodos()
}

RCT_EXPORT_METHOD(remove_todo:(NSInteger)id
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    Database.instance.deleteTodo(todoId: todoId);
}

RCT_EXPORT_METHOD(get_todos_by_category:(NSString *)category 
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject)
{
    return Database.instance.getFilteredTodos(todoCategory: category)
}

@end