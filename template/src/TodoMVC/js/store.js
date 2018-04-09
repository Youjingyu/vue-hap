// var STORAGE_KEY = 'todos-vuejs';

export default {
  fetch: function () {
    return [
      {title: 'breakfast', completed: true},
      {title: 'bug fix',  completed: false},
      {title: 'working', completed: false}      
    ];
  },
  save: function (todos) {
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};