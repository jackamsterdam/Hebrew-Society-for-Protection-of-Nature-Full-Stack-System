import express, { NextFunction, Request, Response } from 'express'
import TrekModel from '../03-models/trek-model'
import logic from '../05-logic/logic'

const router = express.Router()

router.get('/areas', async (request: Request, response: Response, next: NextFunction) => {
  try {
      const areas = await logic.getAllAreas()
      response.json(areas) 


  } catch (err: any) {
      next(err)
  }
})


router.get('/treks-by-area/:areaId', async (request: Request, response: Response, next: NextFunction) => {
  try {
 const areaId = +request.params.areaId 
  const treks = await logic.getTreksByArea(areaId)
  response.json(treks)


  } catch (err: any) {
      next(err)
  }
})

router.post('/treks', async (request: Request, response: Response, next: NextFunction) => {
  try {
     const trek = new TrekModel(request.body)
     const addedTrek = await logic.addTrek(trek)
  response.status(201).json(addedTrek)  

  } catch (err: any) {
      next(err)
  }
})

router.delete('/treks/:trekId', async (request: Request, response: Response, next: NextFunction) => {
  try {
 const trekId = +request.params.trekId 
  await logic.deleteTrek(trekId)
  response.sendStatus(204)


  } catch (err: any) {
      next(err)
  }
})



export default router 