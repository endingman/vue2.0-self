//储存模块A的state和mutations
import * as type from '../types'
import { getUserList, createUser, updateUser,deleteUser,sysnStateUser } from '../../resource/api'
import http from '../../resource/http'


const state     = {
  count: 0,
  user: []
}
const mutations = {
  [type.INCREMENT](state){
    state.count++
  },
  [type.REDUCE](state){
    state.count--
  },
  [type.USER_LIST](state){
    getUserList((data)=> {
      state.user = data
    }, (rsp)=> {
      console.log(rsp)
    });
    // http.$resource('user','get',(data)=>{
    //   state.user=data
    // },(rsp)=>{
    //   console.log(rsp)
    // });
  },
  [type.USER_INFO](state){
    http.$resource('user', {'get': 1}, (data)=> {
      console.log(data)
    }, (rsp)=> {
      console.log(rsp)
    });
  },
  [type.USER_CREATE](state){
    createUser({name: Math.random(), email: Math.random(), password: Math.random()}, (data)=> {
      console.log(data);
    }, (rsp)=> {
      console.log(rsp)
    });
    // http.$resource('user',{'post':{name:Math.random(),email:Math.random(),password:Math.random()}},(data)=>{
    //   console.log(data);
    // },(rsp)=> {
    //   console.log(rsp)
    // });
    sysnStateUser(state);
  },
  [type.USER_UPDATE](state){
    updateUser(1, {name: Math.random(), email: Math.random(), password: Math.random()}, (data)=> {
      console.log(data);
    }, (rsp)=> {
      console.log(rsp)
    });
    // http.$resource('user', {'put': {id:1,data:{name: Math.random(), email: Math.random(), password: Math.random()}}}, (data)=> {
    //   console.log(data);
    // }, (rsp)=> {
    //   console.log(rsp)
    // });
    sysnStateUser(state);
  },
  [type.USER_DELETE](state){
    deleteUser(1, (data)=> {
      console.log(data);
    }, (rsp)=> {
      console.log(rsp)
    });
    // http.$resource('user', {'delete': 1}, (data)=> {
    //   console.log(data);
    // }, (rsp)=> {
    //   console.log(rsp)
    // });
    sysnStateUser(state);
  },
}

export default {
  state,
  mutations
}