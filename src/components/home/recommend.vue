<template>
<div class="content">
    <div class="content-item" v-for="(item,index) in state.list" :key="index">
        <div class="item-title">{{item.title}}</div>
        <div class="item-content">
            <div class="item-text">
                <div class="name">
                    <img class="name-img" :src="item.profile"/>
                    <div class="name-text">{{item.name}}</div>
                </div>
                <div class="sentence">{{item.sentence}}</div>
            </div>
            <div class="item-img">
                <img :src="item.image">
            </div>
        </div>
        <div class="item-foot">
            <div>{{item.numA}}赞同·{{item.numB}}评论</div>
            <div>...</div>
        </div>
    </div>
    <div @click="handleRefresh">
    </div>
</div>
</template>

<script>
import {onMounted,reactive,toRef, toRefs} from 'vue'
import api from '/@/api/index'
export default {
    setup(){
        let state = reactive({
                list:[],
            })
        const _getRecommend = ()=>{
            api.getRecommend()
                .then((res)=>{
                    if (res.status === 200 && res.statusText === 'OK') {
                        state.list.push(...res.data.data.list)
                        //state.list.push(...res.data.data.list)
                        console.log(state.list)
                    }
                })
        };
        onMounted(async () => {
            await _getRecommend()
            window.addEventListener('scroll',handleRefresh)
        });
        const handleRefresh = async() =>{
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if(scrollHeight-windowHeight-scrollTop<1){
                await _getRecommend()
            }
        }
        return{
            //handleRefresh,
            state,
            _getRecommend
        }
    }
}
</script>

<style lang='scss'>
.content{
    background-color:rgb(226, 226, 226);
    .content-item{
        padding: 20px;
        height: 200px;
        overflow: hidden;
        background: #fff;
        text-align: left;
        margin-bottom: 20px;
        .item-title{
            padding: 9px 0;
            font-size:30px;
            font-weight: 600;
            font-family: '微软雅黑'
        }
        .item-content{
            display: flex;
            .item-text{

                .name{
                    font-size: 12px;
                    font-weight: 600;
                    color: #bebebe;
                    display: flex;
                    .name-img{
                        width: 30px;
                        height: 30px;
                        margin-right: 5px;
                        border-radius: 30px;
                    }
                    .name-text{
                        display: flex;
                        align-items: flex-end;
                    }
                }
                .sentence{
                    margin: 10px 0;
                    font-size: 16px;
                    line-height: 30px;
                    letter-spacing: 0.4pt;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
            .item-img{
                img{
                    width: 170px;
                    height: 110px;
                    border-radius: 8px;
                }
            }
        }
        .item-foot{
            display: flex;
            justify-content: space-between;
            color: #bebebe;
            letter-spacing: 0.4pt;
        }
    }
}
</style>