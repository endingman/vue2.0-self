// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export default {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  evenOrOdd2: state=>state.moduleA.count % 2 === 0 ? 'even' : 'odd',
}