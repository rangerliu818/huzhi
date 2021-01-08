<template>
<div class="nav-relative">
  <nav class="menu index" :style="{position:current.isFixed,top:0}">
      <ul class="menu-list">
            <li v-for="(item,index) in headNav" :key="index" v-on:click="addClass(index)"
              :class="{ currentSize:index===current.index}">
              <router-link replace :to='item.link'><div>{{item.text}}</div></router-link>
            </li>
      </ul>
  </nav>
  <router-view/>
</div>
</template>

<script>
import {headNav} from '/@components/until/icon.js'
import {ref,reactive,onMounted} from 'vue'
export default {
    setup(){
        let current =reactive({
            index : 1,
            isFixed:'relative'
        })
        const addClass = (index)=>{
            current.index = index
        }
        const handleTop = ()=>{
              // 得到页面滚动的距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 判断页面滚动的距离是否大于吸顶元素的位置
            current.isFixed = scrollTop > 70?'fixed':'relative';
            console.log(current.isFixed)
        }
        onMounted(async()=>{
            window.addEventListener('scroll',handleTop)
        })
        return{
            current,
            headNav,
            addClass,
            handleTop,
        }
    }
}
</script>

<style lang="scss">
.menu{
    display: flex;
    align-items: center;
    height: 80px;
    padding-left: 30px;
    padding-top: 10px; 
    background-color: #fff;
    .menu-list{
        display: flex;
        font-size: 16px;
        li{
            margin-right: 30px;
            div{
                height: 20px;
               display:flex;
               align-items:flex-end;
               color: gray;
            }
        }
    }
}
.currentSize{
    div{
        font-size: 30px;
        color: black!important;
    }
}
</style>