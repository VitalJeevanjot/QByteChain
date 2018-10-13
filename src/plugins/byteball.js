import {Client} from 'byteball'
// eslint-disable-next-line
export default ({ app, router, Vue }) => {
  let byteballClient = new Client('wss://byteball.fr/bb')
  Vue.prototype.$byteballClient = byteballClient
}
