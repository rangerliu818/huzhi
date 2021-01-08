<template>
    <router-view/>
    <Nav></Nav>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from '/@components/nav/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style module>
@import url('./assets/reset.css');

</style>