import { OkPacket } from "mysql";
import dal from "../04-dal/dal";
import ErrorModel from "../03-models/error-model";
import AreaModel from "../03-models/area-model";
import TrekModel from "../03-models/trek-model";





async function getAllAreas():Promise<AreaModel[]>{
   const sql = `SELECT * FROM areas`

   const areas = await dal.execute(sql)
   return areas
}

async function getTreksByArea(areaId: number):Promise<TrekModel[]> {
//   const sql = `SELECT * FROM treks 
//                WHERE areaId = ?`


  const sql = `SELECT t.*, a.areaName as 'areaName' 
               FROM treks as t
               INNER JOIN  areas as a
                 ON t.areaId = a.areaId
                 WHERE a.areaId = ?
                 ORDER BY t.trekName`

   const treks = await dal.execute(sql,[areaId])
   console.log("treks", treks);
   
// 404 resource not found 
   return treks 


}

async function addTrek(trek: TrekModel): Promise<TrekModel> {
    // Validation 
    const errors = trek.validatePost()
    console.log("errors", errors);
    if (errors) throw new ErrorModel(400, errors)
   const sql  = `INSERT INTO treks VALUES(DEFAULT, ?,?,?,?,?)`

   const info: OkPacket = await dal.execute(sql, [trek.areaId, trek.trekName, trek.description, trek.priceAdult, trek.priceChild])

   trek.trekId = info.insertId
   return trek 
}

async function deleteTrek(trekId: number):Promise<void> {
    const sql = `DELETE FROM treks 
                 WHERE trekId = ?`
  const info: OkPacket = await dal.execute(sql, [trekId])
  if (info.affectedRows === 0) throw new ErrorModel(404, `Resource with id ${trekId} not found.`)
    
}

export default {
    getAllAreas,
    getTreksByArea,
    addTrek,
    deleteTrek
}