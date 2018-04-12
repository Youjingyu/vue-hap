<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <TodoMVC/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import TodoMVC from './pages/TodoMVC/index'
{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    TodoMVC
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>