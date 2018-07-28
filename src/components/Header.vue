<template>
    <div class="mz-header">
        <ul class="navL" @click="show">
            <li class="menu">菜单</li>
            <li class="nav_content">卖座电影</li>
        </ul>
        <ul class="navR">
            <router-link tag="li" to="/city">长沙</router-link>
            <router-link tag="li" to="/login">登录</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Header",
        methods:{
            show(){
                this.$store.dispatch("showAction")
            }
        }
    }
</script>

<style>
.mz-header{position: fixed; z-index:8888; width: 100%; height: 50px; line-height: 50px;
    overflow: hidden; background-color: #282828; color: #999; text-align: center; }
.mz-header li{float: left;}
.mz-header .navL{float: left;}
.mz-header .navL .menu{width:50px; height: 50px;border-right: 1px solid #222;}
.mz-header .navL .nav_content{padding:0 14px;color:#fff;}
.mz-header .navR{float:right;}
.mz-header .navR li{width:50px; height: 50px;}
</style>