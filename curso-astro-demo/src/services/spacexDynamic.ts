import { type APISpaceXResponse } from "../types/apiLaunchesDynamic";

export async function getLaunches() {
    const response = await fetch("https://api.spacexdata.com/v3/launches/");
    const data = await response.json();
    const launches = data.splice(0, 10) as APISpaceXResponse[];
    // console.log(launches);
    return launches
}

export async function getLaunchesById({ id }: { id: string }) {
    const response = await fetch(`https://api.spacexdata.com/v3/launches/${id}`)
    const launch = await response.json()
    return launch as APISpaceXResponse
}