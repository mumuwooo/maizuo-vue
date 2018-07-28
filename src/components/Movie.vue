<template>
        <div class="mz_home_content">
            <ul class="hotmovie">
                <li class="item" v-for="item in arr" :key="item.id">
                    <img :src="item.cover.origin" />
                    <div class="row desc">
                        <div class="fl">
                            <div class="film-name">{{item.name}}</div>
                            <div class="count" v-if="type=='now-playing'">
                                <span>{{item.cinemaCount}}</span>
                                <span>家影院上映</span>
                                <span>{{item.watchCount}}</span>
                                <span>人购票</span>
                            </div>
                        </div>
        
                        <div v-if="type=='now-playing'" class="fr score">{{item.grade}}</div>
                        <div v-else class="fr showing-date">{{item.premiereAt}}</div>
                    </div>
                </li>
            </ul>
            <!-- end ul.hotmovie  -->
            <div class="more-button">{{more_button}}</div>
        </div>
        <!-- end div.mz_home_content  -->
</template>

<script>
import Banner from "@/components/Banner";

export default {
    name: "Movie",
    props:["type"],
    computed:{
        more_button(){
            return this.type=="now-playing"? "更多热映电影":"更多即将上映电影"
        }
    },
    data(){
        return {
            arr:[]
        }
    },
    components:{Banner},
    created() {
        let params={_t:Date.now(),page:1,count:5};

        let url=`/anhao/v4/api/film/${this.type}`;
        this.$http.get(url,{params}).then(res=>{
            this.arr=res.data.data.films
        })
    },
}
</script>
<style >
.mz_home_content{width:100%; overflow:hidden;background:#e1e1e1;}
.mz_home_content li{width:341px; height: 240px;padding:17px;cursor: pointer; }
.mz_home_content img{width:341px; height: 192px;}

.desc {height: 50px;}
.upcoming-desc {height: 35px;}
.item{height: 50px;padding-right: 0;padding-top: 13px;}
.item .film-name {font-size: 12px;line-height: 15px;user-select: text;}
.item .count {font-size: 8px; color: #9a9a9a;line-height: 15px;}
.item .score {color: #f78360; display: inline-block;line-height: 50px;margin-right: 15px; font-size: 18px;}
.item .showing-date {
    font-size: 10px;color: RGB(245, 162, 125);
    line-height: 15px;height: 35px; 
    padding-right: 0;padding-top: 10px;padding-left: 28px;
}
.more-button {
    width: 160px;height: 30px;border: 1px solid #aaa;border-radius: 15px;
    margin: 10px auto 30px;text-align: center;line-height: 30px;
    font-size: 12px;color: #616161; cursor: pointer;
}

</style>