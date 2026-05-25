import { Locations } from "../../types"
import "./style.css"
type LocationProps={
    location?:Locations | null;
    onClick?:()=>void;
    showdetails?:boolean;
}

export default function LocationComp({location,onClick,showdetails}: LocationProps){
    return(

        <div>

            {!showdetails &&

                <div onClick={onClick}>
                    <h2>{location?.name}</h2>
                </div>

            }

            {showdetails &&

                <div>
                    <h2>{location?.name}</h2>
                    <h3>Dimension: {location?.dimension}</h3>
                    <h3>Type: {location?.type}</h3>
                </div>

            }

        </div>

    );

}