<template>
  <section class="todoapp">
    <header class="header">
      <h1 class="title"><span class="title-text">Todos</span></h1>
        <div class="new-todo-head">
          <input class="new-todo" placeholder="What needs to be done?" v-model.trim="newTodo.text">
          <button @click="addTodo" class="new-todo-btn">add</button>
        </div>
      </header>
      <section class="main" v-show="todos.length">
        <ul class="todo-list">
          <li class="todo" v-for="(todo, i) in showTodos" :key="i">
            <div class="view">
              <input type="checkbox" v-model="todo.completed" @click="toggleComplete(i)">
              <div class="view-content" @click="focusItem(i)"><span :class="{'view-content-text': todo.completed}">\{{todo.title}}</span></div>
              <div class="destroy"><span v-show="focusIndex === i" @click="removeTodo(i)" class="destroy-icon">x</span></div>
            </div>
          </li>
        </ul>
      </section>
      <div class="footer">
          <p><span class="left-item">\{{leftItems}} items left</span></p>
          <div class="toggle-content">
            <button @click="swicth('all')" class="toggle" :class="{'toggle-active': visibility === 'all'}">all</button>
            <button @click="swicth('active')" class="toggle" :class="{'toggle-active': visibility === 'active'}">active</button>
            <button @click="swicth('completed')" class="toggle" :class="{'toggle-active': visibility === 'completed'}">completed</button>
          </div>
      </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

const filters = {
  all: function (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}
export default {
  data () {
    return {
      todos,
      focusIndex: undefined,
      visibility: 'all',
      newTodo: {text: ''}
    }
  },
  created () {
    {{#router}}
    console.log(this.$route.query.userInfo)
    {{/router}}
  },
  watch: {
    visibility () {
      console.log('visibility changed')
    }
  },
  computed: {
    ...mapState(['todos']),
    showTodos () {
      return filters[this.visibility](this.todos)
    },
    leftItems () {
      return filters.active(todos).length
    }
  },
  methods: {
    swicth: function (type) {
      this.visibility = type
    },
    addTodo: function () {
      const value = this.newTodo.text
      if (!value) {
        return
      }
      const res = {
        title: value,
        completed: false
      }
      this.$store.commit('addTodo', res)
    },
    removeTodo (index) {
      this.$store.commit('addTodo', index)
    },
    focusItem (curFocusIndex) {
      this.focusIndex = this.focusIndex === curFocusIndex ? undefined : curFocusIndex
    },
    toggleComplete (i) {
      console.log(this.todos[i].computed)
    }
  }
}
</script>
<style>
@import "./css/index.css";
@import '../../css/reset.css';
/* quick app ignore start */
@import "../../css/web-reset.css";
/* quick app ignore end */
</style>
