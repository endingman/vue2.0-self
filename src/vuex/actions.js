import * as type from './types'

//Controller层
export default {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd ({commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },

  user_list ({commit}){
    return new Promise((resolve, reject) => {
      commit(type.USER_LIST)
      resolve()
    })
  },

  user_info ({commit}){
    return new Promise((resolve, reject) => {
      commit(type.USER_INFO)
      resolve()
    })
  },

  user_post ({commit}){
    return new Promise((resolve, reject) => {
      commit(type.USER_CREATE)
      resolve()
    })
  },

  user_put ({commit}){
    return new Promise((resolve, reject) => {
      commit(type.USER_UPDATE)
      resolve()
    })
  },

  user_delete ({commit}){
    return new Promise((resolve, reject) => {
      commit(type.USER_DELETE)
      resolve()
    })
  },


}