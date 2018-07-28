<template>
    <div class="mz-home">
        <Banner></Banner>
        <Movie type="now-playing"></Movie>
        <Movie type="coming-soon"></Movie>
    </div>
</template>

<script>
import Banner from "@/components/Banner";
import Movie from "@/components/Movie";
export default {
        name: "Home",
        data(){
            return {

            }
        },
        components:{Banner,Movie}
    }
</script>

<style>
</style>