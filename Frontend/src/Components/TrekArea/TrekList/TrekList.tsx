import { SyntheticEvent, useEffect, useState } from "react";
import AreaModel from "../../../Models/AreaModel";
import TrekModel from "../../../Models/TrekModel";
import notify from "../../../Services/NotifyService";
import trekService from "../../../Services/TrekService";
import TrekCard from "../TrekCard/TrekCard";
import "./TrekList.css";

function TrekList(): JSX.Element {

    const [areas, setAreas] = useState<AreaModel[]>([])
    const [treks, setTreks] = useState<TrekModel[]>([])

    useEffect(() => {
        (async function () {
            try {
                const areas = await trekService.getAllAreas()
                setAreas(areas)
            } catch (err: any) {
                notify.error(err)
            }
        })()
    }, [])

    async function handleChange(e: SyntheticEvent): Promise<void> {
        try {
            const areaId = +(e.target as HTMLSelectElement).value
            const treks = await trekService.getTreksByArea(areaId)
            setTreks(treks)
        
    } catch (err: any) {
        notify.error(err)
    }

}

async function deleteTrek(trekId: number): Promise<void> {
    try {
        await trekService.deleteTrek(trekId)
        // const trekCopy = [...treks]
        // const indexToDelete = trekCopy.findIndex(t => t.trekId === trekId)
        // trekCopy.splice(indexToDelete, 1)
        // setTreks(trekCopy)


        const indexToDelete = treks.findIndex(t => t.trekId === trekId)
        treks.splice(indexToDelete, 1)
        setTreks([...treks])
        notify.success(' הטרק נמחק')
    }
   catch (err: any) {
    notify.error(err)
}

     
  }


return (
    <div className="TrekList">
        <select onChange={handleChange} defaultValue=''>
            <option disabled value="">תבחר אזור</option>
            {areas.map(a => <option key={a.areaId} value={a.areaId}>{a.areaName}</option>)}
        </select>


        {/* {treks.length !== 0 && <table>
                <thead>
                    <tr>
                        <th>שם</th>
                        <th>אזור</th>
                        <th>פרטים</th>
                        <th>מחיר למבוגר</th>
                        <th>מחיר לילד</th>
                    </tr>
                </thead>
                <tbody>
                    {treks.map(t => <tr key={t.trekId}>
                       <td>{t.trekName}</td>
                       <td>{t.areaName}</td>
                       <td title='תאור'>{t.description}</td>
                       <td>{t.priceAdult}</td>
                       <td>{t.priceChild}</td>
                       <td><button onClick={() => deleteTrek(t.trekId)}>❌</button></td>
                   
                    </tr>)}
                </tbody>
            </table>} */}
        <div className="container">

            {treks.map(t => <TrekCard key={t.trekId} trek={t} deleteTrek={deleteTrek} />)}

        </div>


    </div>
);
}

export default TrekList;
