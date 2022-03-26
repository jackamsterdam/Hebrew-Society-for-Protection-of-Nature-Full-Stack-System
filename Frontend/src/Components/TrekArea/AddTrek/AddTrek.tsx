import TrekModel from "../../../Models/TrekModel";
import "./AddTrek.css";
import { useForm } from 'react-hook-form'
import AreaModel from "../../../Models/AreaModel";
import { useNavigate } from 'react-router-dom'
import trekService from "../../../Services/TrekService";
import notify from "../../../Services/NotifyService";
import { useEffect, useState } from "react";


function AddTrek(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<TrekModel>()
    const [areas, setAreas] = useState<AreaModel[]>([])
    const navigate = useNavigate()

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

    async function submit(trek: TrekModel): Promise<void> {
        try {
            console.log("trek", trek);
            await trekService.addTrek(trek)
            notify.success('הטיול התווסף')
            navigate('/trek-list')

        } catch (err: any) {
            notify.error(err)
        }



    }

    return (
        <div className="AddTrek Box">
            <form onSubmit={handleSubmit(submit)}>
                <h1>הוספת טיול</h1>

                <label>תבחר אזור</label>
                <select defaultValue='' {...register('areaId', {
                    required: { value: true, message: "חסר מיקום." }
                })}>
                    <option disabled value="">תבחר אזור</option>
                    {areas.map(a => <option key={a.areaId} value={a.areaId}>{a.areaName}</option>)}
                </select>
                <br />
                <span>{formState.errors?.areaId?.message}</span>

                <label> שם:</label>
                <input type="text" {...register('trekName', {
                    required: { value: true, message: "חסר שם" }
                })} />
                <br />
                <span>{formState.errors?.trekName?.message}</span>

                <label> תאור:</label>
                <input type="text" {...register('description', {
                    required: { value: true, message: "חסר תאור" }
                })} />
                <br />
                <span>{formState.errors?.description?.message}</span>

                <label> מחיר מבוגר:</label>
                <input type="number" step="0.01" {...register('priceAdult', {
                    required: { value: true, message: "חסר מחיר" },
                    min: { value: 0, message: "מחיר לא יכול להיות שלילי" },
                    max: { value: 1000, message: "מחיר לא יכול להיות לעבור 1000" }
                })} />
                <br />
                <span>{formState.errors?.priceAdult?.message}</span>

                <label> מחיר ילד:</label>
                <input type="number" step="0.01" {...register('priceChild', {
                    required: { value: true, message: "חסר מחיר" },
                    min: { value: 0, message: "מחיר לא יכול להיות שלילי" },
                    max: { value: 1000, message: "מחיר לא יכול להיות לעבור 1000" }
                })} />
                <br />
                <span>{formState.errors?.priceChild?.message}</span>

                <br />
                <button>הוסף</button>
            </form>

        </div>
    );
}

export default AddTrek;
