<template>
<div class="head">
    <section>
        <i class="iconfont icon-zhibo zhibo"></i>
    </section>
    <section>
        <div class="search">
            <input class="search-box" type="text" />
        </div>
    </section>
    <section> <i class="iconfont icon-jia jia"></i></section>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('../../assets/moile-style/index.scss');
@import url('../../assets/icon/home/iconfont.css');
    .head{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 80px;
        align-items: center;
        padding: 20px  30px;
        .search{
            .search-box{
                height: 50px;
                width: 550px;
                background-color:rgb(226, 226, 226);
                border: hidden;
                border-radius: 40px;
            }
        }
        .zhibo{
            font-size: 50px
        }
        .jia{
            font-size: 40px;
            color: #0084ff;
        }
    }

</style>>
