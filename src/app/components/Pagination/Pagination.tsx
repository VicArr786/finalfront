type CharacterProps={
    page:number;
    setpage:(page:number)=>void;
    prev:string|null;
    next:string|null;
}
import "./style.css"


export default function Pagination({page,setpage,prev,next}:CharacterProps){
    return(
        <div className="Pagination">
            <button disabled={!prev} onClick={()=> setpage(page-1)}>Anterior</button>
            <h2>Pagina {page}</h2>
            <button disabled={!next} onClick={()=> setpage(page+1)}>Siguiente</button>
            <h3>{}</h3>
        </div>
    );

}