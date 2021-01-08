<template>
  <ul class="nav">
        <li v-for="(item,index) in navIcon" :key="index" v-on:click="addClass(index)"
            :class="{ currentColor:index===current.index}">
            <router-link replace :to='item.link'>
                <div class="item-icon">
                    <i :class="item.icon"></i>
                    <div>{{item.text}}</div>
                </div>
            </router-link>
        </li>
  </ul>
</template>

<script>
import {reactive} from 'vue'
import {navIcon} from '/@components/until/icon.js'
export default {
      setup(){
        let current =reactive({
            index : 0
        })
        const addClass = (index)=>{
            current.index = index
        }          
        return{
            navIcon,
            addClass,
            current
        }
    }
}
</script>

<style lang='scss'>
@import url('../../assets/moile-style/index.scss');
@import url('../../assets/icon/nav/iconfont.css');
.nav{
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 10px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    height: 90px;
    li{
        .item-icon{
            i{
                font-size: 40px;
                font-weight: bold;
            }
            div{
                margin-top:5px;
                font-size: 18px;
                font-weight: 600; 
            }
        }
    }
}
.currentColor{
    i{
        color: #0084ff;
    }
    div{
        color: #0084ff;
    }

}
</style>