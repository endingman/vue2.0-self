import Hello from '../components/Hello'
import Method from '../components/Method'

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

module.exports = [
  {path: '/hello', component: Hello},
  {path: '/method', component: Method},
  {path: '/bar', component: Bar}
]