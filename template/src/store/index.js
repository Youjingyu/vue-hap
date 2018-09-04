import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [
    {title: 'breakfast', completed: true},
    {title: 'fix bug', completed: false},
    {title: 'meeting', completed: false}
  ]
}

const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  removeTodo (state, index) {
    state.todos.splice(index, 1)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
