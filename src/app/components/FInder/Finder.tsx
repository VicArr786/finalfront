import "./style.css"
type FinderProps={
    value:string;
    onChange:(e:string)=>void;
    handlCha:()=>void;
}

export default function Finder({value,onChange,handlCha}:FinderProps){
    return(

        <div>
            <input type="text" placeholder="Buscar..." value={value} onChange={(e)=>onChange(e.target.value)}/>
            <button onClick={handlCha}>Buscar</button>
        </div>
    );
}

/*
type FinderProps={
    value:string;
    onChange:(e:string)=>void;
    handlCha:()=> void;
}

export default function FinderProps({value,onChange,handlCha}: FinderProps){
    return(

        <div>

        <input type="text" placeholder="Buscar localización..." value={value} onChange={(e)=>onChange(e.target.value)}/>
          <button onClick={handlCha}>Buscar</button>

        </div>
    );
}
*/