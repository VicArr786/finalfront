export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterLocation;
    location: CharacterLocation;
    image:string;
}

export type CharacterLocation = {
    name: string;
    url: string;
}


export type CharacterResponse = {
    info:{
        count:number;
        pages:number;
        next:string|null;
        prev:string|null;
    }
    results:Character[];
}

export type LocationsResponse ={
    info:{
        count:number;
        pages:number;
        next:string|null;
        prev:string|null;
    }
    results:Locations[];
}

export type Locations ={
    id: number,
    name: string,
    type: string,
    dimension: string,
}