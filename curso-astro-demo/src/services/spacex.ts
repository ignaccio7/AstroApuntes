import { type APISpaceXResponse } from "../types/api.ts";

// with rockets
export async function getLaunches() {
    const res = await fetch("https://api.spacexdata.com/v3/rockets");

    // const data = await res.json();
    // const { country } = await res.json() as APISpaceXResponse;
    const data = (await res.json()) as APISpaceXResponse[];

    return data
    // console.log(data);
}

// witch launches
// https://api.spacexdata.com/v3/launches/id
export async function getLaunchesById(id:string){
    const res = await fetch(`https://api.spacexdata.com/v3/launches/${id}`)
    const data = await res.json()
}