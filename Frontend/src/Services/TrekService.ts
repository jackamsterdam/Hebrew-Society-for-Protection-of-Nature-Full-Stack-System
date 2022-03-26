
import axios from 'axios'
import config from '../Utils/Config'
import AreaModel from '../Models/AreaModel'
import TrekModel from '../Models/TrekModel'
class TrekService {
    async getAllAreas():Promise<AreaModel[]>{
       const response = await axios.get<AreaModel[]>(config.areasUrl)
       const areas = response.data 
       return areas
    }

    async getTreksByArea(areaId: number):Promise<TrekModel[]> {
     const response = await axios.get<TrekModel[]>(config.treksByAreaUrl + areaId)
     const treks = response.data 
     return treks 
    }


    async addTrek(trek: TrekModel): Promise<TrekModel> {
      const response = await axios.post<TrekModel>(config.treksUrl, trek)
      const addedTrek = response.data 
      return addedTrek 

    }


    async deleteTrek(trekId: number):Promise<void> {
      await axios.delete(config.treksUrl + trekId)


    }
}



const trekService = new TrekService()
export default trekService 