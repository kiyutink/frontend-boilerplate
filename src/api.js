import {all, complete, incomplete} from './constants/todoFilterValues';

export class Api {
  static allTodos = [
    {
      id: '123123',
      name: 'hey',
      isCompleted: false
    },
    {
      id: '123121',
      name: 'hey',
      isCompleted: false
    },
    {
      id: '123122',
      name: 'let\'s go',
      isCompleted: true
    }
  ];

  static fetchTodos(filter) {
    return delay(500).then(() => {
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
}

function delay(time) {
  return new Promise(res => {
    setTimeout(res, time);
  });
}