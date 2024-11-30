import { type Express, Router } from 'express'
import {
  healthCheckRoutes
} from '../routes'

export default (app: Express): void => {
  const router = Router()

  healthCheckRoutes(router)

  app.use('/', router)
}
