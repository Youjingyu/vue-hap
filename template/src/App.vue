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
html, body{
  margin: 0;
  height: 100%;
}
#app{
  height: 100%;
}
</style>