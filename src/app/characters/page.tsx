"use client"
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import { getCharacterByPage,getCharaterByName } from "../lib/api/Character"
import { CharacterResponse } from "../types"
import Pagination from "../components/Pagination/Pagination"
import CharacterComp from "@/app/components/CharactersC/CharactersC"
import FinderProps from "../components/FInder/Finder"
import "./styles.css";

const CharacterPage=()=>{
    const [cha,setcha]= useState<CharacterResponse|null>(null);

    const router= useRouter();
    const [loading,setloading]=useState<boolean>(true);
    const[error,seterror]=useState<string>("");

    const [page,setpage]=useState<number>(1);

    const [search,setSearch]=useState<string>("");
    const [currentS,setCurrentSearch]=useState<string>("");

    const fetchCha = async() =>{
        try {
            setloading(true);
            seterror("");

            const data= currentS
                ? await getCharaterByName(currentS,page)
                : await getCharacterByPage(page)

            setcha(data);

        } catch (e) {

            setcha(null);
            seterror("No se encontro personaje")

        } finally{

            setloading(false);

        }
    }

    useEffect(()=>{
        fetchCha();
    },[page,currentS])

    const handlCha=()=>{
        setpage(1);
        setCurrentSearch(search.trim());
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <div className={"ContainerCharacters"}>

            <FinderProps value={search} onChange={setSearch} handlCha={handlCha}/>

            {error && <h1>{error}</h1>}

            <div className="contenedor-tarjetas">

                {cha?.results.map((charac)=>(

                    <div key={charac.id}>
                        <CharacterComp character={charac} onClick={()=> router.push(`/character/${charac.id}`)} showdetails={false}/>
                    </div>

                ))}


            </div>


            {cha &&

                <Pagination page={page} setpage={setpage} prev={cha.info.prev} next={cha.info.next}/>

            }


        </div>

    );

}
export default CharacterPage;