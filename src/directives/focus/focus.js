import Vue from 'vue';

// export default ((Vue) => {
//   Vue.directive('focus', {
//     inserted(el) {
//       el.focus();
//     }
//   })
// })

const focus = {
  install: (Vue => {
    Vue.directive('focus', {
      inserted(el) {
        el.focus();
      }
    })
  })
}


const focus1 = {
  inserted(el) {
    el.focus();
  }
}

export default focus1
