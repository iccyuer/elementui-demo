import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
state: {
  count: 0,
  nums: [1, 2, 3, 4, 5, 3],
  pepple:{
    name:''
  }
},
getters: {
  resultNums: state => {
    return state.nums.filter(num => num > 2);
  },
  resultNumsLength: (state, getters) => {
    return getters.resultNums.length;
  },
  getNumsByIndex: (state) => (index) => {
    return state.nums[index];
  },
  count: state => {
    return state.count
  },
  pepple: state =>{
    return state.pepple
  }
},
mutations: {
  increment (state) {
    state.count++
  },
  increment2(state, param) {
    state.count += param.num
  },
  changePeople(state,param){
    // state.pepple.name=param.name
    // state.pepple.age=param.age
    // state.pepple=param
    // Vue.set(state.pepple,'age',param.age)
    state.pepple = {...state.pepple,age:param.age}
  },
  sync(state){
    // setTimeout(() => {
    //   state.count+=1;
    // }, 2000);
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        state.count+=1;
        resolve();
      }, 2000);
    })
  }
},
actions:{
  async({commit,state}){
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 2000);
    })
  }
}
})

// store.commit('increment')
// console.log(store.state.count)

export default store;