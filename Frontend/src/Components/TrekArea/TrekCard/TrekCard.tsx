import TrekModel from "../../../Models/TrekModel";
import "./TrekCard.css";

interface TrekCardProps {
    trek: TrekModel
    deleteTrek: (trekId: number) => void
}

function TrekCard(props: TrekCardProps): JSX.Element {
    return (
        <div className="TrekCard">

            <span>שם: {props.trek.trekName}</span>
            <br />
            <span>תיאור: {props.trek.description}</span>
            <br />
            <span>מחיר למבוגר:{props.trek.priceAdult}</span>
            <br />
            <span>מחיר לילד: {props.trek.priceChild}</span>
            <br />
            <span>אזור: {props.trek.areaName}</span>
            <br />
            <button onClick={() => props.deleteTrek(props.trek.trekId)}>❌</button>
			
        </div>
    );
}

export default TrekCard;
