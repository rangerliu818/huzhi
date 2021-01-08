<template>
<div class="index">
    <div></div>
    <div class="form">
        <form @submit.prevent="stop" class="form-data">
            <div class="form-a"> 密码登录</div>
            <input v-model="userInfo.username" type="text" placeholder="用户名"  />
            <input v-model="userInfo.password"  type="password" placeholder="密码"  />
            <button @click="login(userInfo)">登录</button>
            <div class="another">
                <div>短信验证码登录</div>
                <div>海外手机号登录</div>
            </div>
        </form>
        <div class="other">
            <div class="other-title">其他登录方式</div>
            <div class="other-way">
                <div class="other-way-icon" v-for="(item,index) in loginIcon" :key='index' :style={background:item.bgcolor,color:item.color}>
                    <i :class="item.icon"></i>
                </div>
            </div>
            <div class="other-text">注册即代表你同意<span>《乎知协议》</span>和<span>《隐私保护协议》</span></div>
        </div>
    </div>
</div>
</template>

<script>
import {reactive,toRefs,nextTick} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'
import {loginIcon} from '/@components/until/icon.js'
import api from '/@/api/index.js'
export default {
    setup(){
        const stop = () =>{
            return false
        };
        const router = useRouter(); 
        const userInfo = reactive({
            username : '',
            password : ''
        });
        const login = (userInfo) =>{
            console.log(axios.defaults.headers.post['Content-Type'])
            console.log(userInfo)
            api.getLogin(userInfo).then(async(res) => {
                if (res.status === 200 && res.statusText === 'OK') {
                    await nextTick()
                    router.push('/')
                }
            })
        }      
        return{
            loginIcon,
            userInfo,
            login
        }
    }
}
</script>

<style lang='scss'>
@import url('../../assets/icon/login/iconfont.css');
.index{
    position: relative;
    .form{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 301;
        background: white;
        .form-data{
            display: flex;
            flex-direction: column;
            margin-top: 200px;
            padding: 0 90px;
            text-align: left;
            .form-a{
                font-size: 40px;
                font-weight: 900;
                margin-bottom: 70px
            }
            button{
                text-align: center;
                height: 80px;
                background: #0084ff;
                border-style:none;
                color: white;
                font-size: 25px;
                font-weight: bold;
                border-radius: 12px;
                margin: 10px 0
            };
            input{
                border-style:none none solid none;
                border-color:rgb(241 241 241);
                font-size: 30px;
                margin: 50px 0;
                height: 50px;
                display: block;
            }
            .another{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                font-weight: 400;
            }
        }
        .other{
            margin-bottom: 70px;
            position: fixed;
            bottom: 0;
            margin-left: 5vw;
            .other-title{
                font-size: 14px;
                color: gray;
            }
        }
        .other-way{
            padding: 0 10px;
            display: flex;
            width: 90vw;
            margin-top:20px; 
            justify-content: space-around;
            .other-way-icon{
                width: 80px;
                height: 80px;
                border-radius: 80px;
                line-height: 80px;
                i{
                    font-size: 50px;
                }
            }
        }
        .other-text{
            margin-top:40px;
            span{
                color: blue;
            }
        }
    }
}
input::-webkit-input-placeholder{
    color:rgb(241 241 241);
    font-family: '微软雅黑';
    font-size: 30px
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:rgb(241 241 241);
    font-family: '微软雅黑';
    font-size: 30px
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:rgb(241 241 241);
    font-family: '微软雅黑';
    font-size: 30px
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:rgb(241 241 241);
    font-family: '微软雅黑';
    font-size: 30px
}
</style>