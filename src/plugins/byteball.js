import {Client} from 'byteball'
// eslint-disable-next-line
export default ({ app, router, Vue }) => {
  let byteballClient = new Client()
  Vue.prototype.$byteballClient = byteballClient
}
