import * as type from './types'

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
// 逻辑层
export default {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}