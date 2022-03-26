import Joi from "joi"

class TrekModel {
    trekId: number 
    areaId: number 
    trekName: string
    description: string 
    priceAdult: number 
    priceChild: number 
    
    constructor(trek: TrekModel) {
        this.trekId = trek.trekId
        this.areaId = trek.areaId
        this.trekName = trek.trekName
        this.description = trek.description
        this.priceAdult = trek.priceAdult
        this.priceChild = trek.priceChild
    }

    private static postValidationSchema = Joi.object({
        trekId: Joi.forbidden(),
        areaId: Joi.number().required().integer().min(1),
        trekName: Joi.string().required().min(2).max(100),
        description: Joi.string().required().min(2).max(100),
        priceAdult: Joi.number().required().min(0).max(1000),
        priceChild: Joi.number().required().min(0).max(1000)
    })

    validatePost():string {
        const result = TrekModel.postValidationSchema.validate(this, {abortEarly: false})
        return result.error?.message
    }
  }
  
  export default TrekModel