<template>
  <div id="app">
    <ExampleComponent />
    <ExampleComponent2 />
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue';
import ExampleComponent2 from './components/ExampleComponent2.vue';

export default {
  name: 'App',
  components: {
    ExampleComponent,
    ExampleComponent2,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
