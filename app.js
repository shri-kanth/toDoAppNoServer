angular.module('todoApp', [])
.controller('TodoListController',toDoList);

function toDoList($http)
{
  var todoList = this;
  todoList.todoItems = [];
  todoList.addTodo = function()
  {
    todoList.todoItems.push({text:todoList.todoText, done:false});
    todoList.todoText = '';
  };

  todoList.completed = function()
  {
    var count = 0;
    angular.forEach(todoList.todoItems,
                    function(todo)
                    {
                      count += todo.done ? 1 : 0;
                    });
    return count;
  };

  todoList.clearFinisihed = function()
  {
    var oldList = todoList.todoItems;
    todoList.todoItems = [];
    for(var i = 0; i < oldList.length; i++)
    {
      if(oldList[i].done === false)
        todoList.todoItems.push(oldList[i]);
    }
  };
};
