<template>
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr" :key="item.id">
            <img :src="item.imageUrl">
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper";

export default {
    name:"Banner",
    data(){
        return {
            arr:[]
        }
    },
created() {
    let url="/anhao/v4/api/billboard/home"
    this.$http.get(url,{params:{_t:Date.now()}}).then(res=>{
        this.arr=res.data.data.billboards;
    })
},
updated() {
    new Swiper(".swiper-container", {
        autoplay: true,//可选选项，自动滑动
        loop: true,
    });
},
}
</script>

<style>
.swiper-container{height:210px;}
.swiper-container img{width:100%; height:100%;}   
</style>