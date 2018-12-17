import {all, complete, incomplete} from './constants/todoFilterValues';

let tries = 0;

export class Api {
  static allTodos = [
    {
      id: '123123',
      name: 'hey',
      isCompleted: false
    },
    {
      id: '123121',
      name: 'ho',
      isCompleted: false
    },
    {
      id: '123122',
      name: "let's go",
      isCompleted: true
    }
  ];

  static fetchTodos(filter) {
    return delay(500).then(() => {
      if (tries < 3 && Math.random() > 0.95) {
        tries++;
        throw new Error('Error');
      }

      switch (filter) {
        case all:
          return Api.allTodos;
        case complete:
          return Api.allTodos.filter(td => td.isCompleted);
        case incomplete:
          return Api.allTodos.filter(td => !td.isCompleted);
        default:
          return Api.allTodos;
      }
    });
  }

  static addTodo(name) {
    return delay(500).then(() => {
      const todo = {
        name,
        id: Math.random()
          .toFixed(10)
          .split('.')[1],
        isCompleted: false
      };
      this.allTodos.push(todo);
      return todo;
    });
  }

  static toggleTodo(id) {
    return delay(500).then(() => {
      const todo = Api.allTodos.find(t => t.id === id);
      todo.isCompleted = !todo.isCompleted;
      return todo;
    });
  }

  static deleteTodo(id) {
    return delay(500).then(() => {
      Api.allTodos = Api.allTodos.filter(t => t.id !== id);
    });
  }

  static renameTodo(id, newName) {
    return delay(500).then(() => {
      const todo = Api.allTodos.find(t => t.id === id);
      todo.name = newName;
      return todo;
    });
  }
}

function delay(time) {
  return new Promise(res => {
    setTimeout(res, time);
  });
}
