<template>
    <div class="mz-nav" @click="show">
        <transition name="slideLeft">
            <ul class="nav" v-show="bshow">
                <router-link v-for="item in arr" :key="item.id" tag="li" to="item">{{item.title}}</router-link>
            </ul>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="bshow"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name:"Nav",
        methods:{
            show(){             
                this.$store.dispatch("showAction")
            }
        },
        computed:{
            bshow(){
                return this.$store.state.isShow
            }
        },
        data(){
            return {
                arr:[
                    {id:Math.random(),path:"/",title:"首页"},
                    { id: Math.random(), path: "/film", title: "影片" },
                    { id: Math.random(), path: "/cinema", title: "影院" },
                    { id: Math.random(), path: "/user", title: "我的" },
                    { id: Math.random(), path: "/card", title: "卖座卡" },
                ]
            }
        }
    }
</script>
<style>
.mz-nav{
   z-index:9000;position:fixed;top:49px;left:0;bottom:0;right:0;border-top:1px solid #222;
}
.mz-nav .nav{position:fixed;top:49px;width:265px; height: 100%;background: #282828;}
.mz-nav .nav li{width:265px;height: 50px;line-height: 50px;  border-bottom: 1px dotted #333;
  color:#9a9a9a; text-indent: 2em;
}
.mask{z-index:-1;position: fixed;top:49px;left:0;bottom:0;right:0;background: rgba(0,0,0,0.6);}

</style>