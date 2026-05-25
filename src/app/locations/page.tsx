"use client"
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import { getLocationByPage,getLocationByName } from "../lib/api/Character"
import { LocationsResponse } from "../types"
import LocationComp from "../components/LocationC/LocationC"
import Pagination from "../components/Pagination/Pagination"
import FinderProps from "../components/FInder/Finder"

const CharacterPage=()=>{
    const [cha,setcha]= useState<LocationsResponse|null>(null);

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
                ? await getLocationByName(currentS)
                : await getLocationByPage(page)

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
        <div className={"SwPlanetsContainer"}>
            <FinderProps value={search} onChange={setSearch} handlCha={handlCha}/>

            {error && <h1>{error}</h1>}

            {cha?.results.map((charac)=>(

                <div key={charac.id}>
                    <LocationComp location={charac} onClick={()=> router.push(`/location/${charac.id}`)} showdetails={false}/>
                </div>

            ))}


            {cha &&
                <Pagination page={page} setpage={setpage} prev={cha.info.prev} next={cha.info.next}/>
            }

        </div>

    );

}
export default CharacterPage;