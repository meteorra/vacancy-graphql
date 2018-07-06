import { Router } from 'express'
import * as ebayController from '../controllers/ebayController'

let router = Router()

router.get('/autocomplete', ebayController.autocomplete)

export default router
