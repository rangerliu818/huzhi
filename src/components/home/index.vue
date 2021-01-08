<template>
<div class="homeindex">
  <HeadSearch></HeadSearch>
  <NavMenu></NavMenu>
</div>
</template>

<script>
import HeadSearch from './headSearch.vue'
import NavMenu from './navMenu.vue'
import api from '/@/api/index.js'
import {onMounted} from 'vue'
export default {
  setup(){
    return {
    }
  },
    components: {
        HeadSearch,
        NavMenu
    },
}
</script>

<style>
.homeindex{
}
</style>