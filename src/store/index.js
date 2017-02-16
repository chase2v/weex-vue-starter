import Vuex from 'vuex';

import actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

import example from './modules/example';

Vue.use(Vuex);

const listener = store => {
    // 将 store 缓存到 session 中
    // if(!sessionStorage){
    //     return;
    // }
    // store.subscribe((mutation,state) => {
    //     sessionStorage.setItem('state',JSON.stringify(state))
    // });
}

export default new Vuex.Store({
    state:{
    },
    modules:{
        example
    },
    actions,
    mutations,
    getters,
    plugins:[listener]
});
