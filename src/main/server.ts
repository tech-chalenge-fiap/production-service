import 'dotenv/config'
import { PaymentServiceApi } from './config/app'
import { envConfig } from './config'

const api = new PaymentServiceApi()

api.listen(() => {
  process.env.TZ = envConfig.TZ
  // eslint-disable-next-line no-console
  console.log(`Server up and running on 🚪 ${envConfig.PORT}`)
})

export { api }
