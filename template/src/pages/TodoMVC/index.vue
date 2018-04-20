<template>
  <section class="todoapp">
    <header class="header">
      <h1 class="title"><span class="title-text">Todos</span></h1>
        <div class="new-todo-head">
          <input class="new-todo" placeholder="What needs to be done?" v-model="newTodo.text">
          <button @click="addTodo" class="new-todo-btn">add</button>
        </div>
      </header>
      <section class="main" v-show="todos.length">
        <ul class="todo-list">
          <li class="todo" v-for="(todo, i) in showTodos" :key="i">
            <div class="view">
              <input type="checkbox" v-model="todo.completed" @click="toggleComplete">
              <div class="view-content" @click="focusItem(i)"><span :class="{'view-content-text': todo.completed}">\{{todo.title}}</span></div>
              <div class="destroy"><span v-show="focusIndex === i" @click="removeTodo(todo)" class="destroy-icon">x</span></div>
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
import todoStorage from './js/store'

var filters = {
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
    const todos = todoStorage.fetch()
    return {
      todos,
      focusIndex: undefined,
      visibility: 'all',
      leftItems: filters.active(todos).length,
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
    showTodos () {
      return filters[this.visibility](this.todos)
    }
  },
  methods: {
    swicth: function (type) {
      this.visibility = type
    },
    addTodo: function () {
      var value = this.newTodo.text && this.newTodo.text.trim()
      if (!value) {
        return
      }
      const res = {
        title: value,
        completed: false
      }
      this.todos.push(res)
      this.leftItems = filters.active(this.todos).length
    },
    removeTodo (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      this.updateLeftItem()
    },
    focusItem (curFocusIndex) {
      this.focusIndex = this.focusIndex === curFocusIndex ? undefined : curFocusIndex
    },
    updateLeftItem(){
      // 快应用检测不到数组内容的直接修改，需要手动更新leftItems
      this.leftItems = filters.active(this.todos).length      
    },
    toggleComplete () {
      // 框架先执行点击事件，再执行v-model的赋值，这里延迟执行，使其在v-model之后执行
      setTimeout(() => {
        this.updateLeftItem()
      })
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
