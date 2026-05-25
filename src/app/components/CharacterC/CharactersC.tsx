import { Character } from "../../types"
import "./style.css"

type CharacterProps={
    character?:Character | null;
    onClick?:()=>void;
    showdetails?:boolean;
}

export default function CharacterComp({character,onClick,showdetails}:CharacterProps){
    return(
        <div className={"ContainerChulangano"}>
            {!showdetails &&
                <div onClick={onClick} >
                    <h2>{character?.name}</h2>
                    <img src={character?.image}/>
                </div>
            }
            {showdetails &&
                <div>
                    <h2>{character?.name}</h2>
                    <img src={character?.image}/>
                    <h3>Gender: {character?.gender}</h3>
                    <h3>Status: {character?.status}</h3>

                </div>

            }
        </div>



    );
}