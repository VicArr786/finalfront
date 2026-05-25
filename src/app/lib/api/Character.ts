import api from "./axios";
import { Character,CharacterResponse, Locations, LocationsResponse } from "@/app/types";

export const getCharacterByPage= async (page:number):Promise <CharacterResponse> =>{
    const res = await api.get<CharacterResponse>(`character/?page=${page}`);
    return res.data;
}

export const getCharaterByName = async (name:string,page:number=1): Promise<CharacterResponse>=>{
    const res= await api.get<CharacterResponse>(`/character?name=${name}&page=${page}`);
    return res.data;
}

export const getCharacterById = async (id:string): Promise<Character> =>{
    const res= await api.get<Character>(`character/${id}`);
    return res.data;
}


export const getLocationByPage= async (page:number):Promise <LocationsResponse> =>{
    const res = await api.get<LocationsResponse>(`location/?page=${page}`);
    return res.data;
}

export const getLocationByName = async (name:string,page:number=1): Promise<LocationsResponse>=>{
    const res= await api.get<LocationsResponse>(`location?name=${name}&page=${page}`);
    return res.data;
}

export const getLocationById = async (id:string): Promise<Locations> =>{
    const res= await api.get<Locations>(`location/${id}`);
    return res.data;
}