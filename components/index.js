import Button from './button'
import Input from './input'
import Ele from './ele'
import Dialog from './dialog'
import Switch from './switch'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Ele)
	Vue.use(Dialog)
	Vue.use(Switch)
  },
}
