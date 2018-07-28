import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        isShow:false
    },
    mutations:{
        showMutation(state,value){
            state.isShow=!state.isShow;
        }
    },
    actions:{
        showAction({commit},value){
            commit("showMutation")
        }
    },
    getters:{},
    modules:{}
})