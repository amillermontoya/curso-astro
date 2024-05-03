import {type Doc,type APISpaceXResponse } from '../types/api'

export const getLatestLaunchesBy = async ({id}: {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launches = await res.json() as Doc
    console.log(launches)
    return launches
}

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    data_unix: "asc"
                },
                limit: 12,
            },
        }),
    })
    console.log(res)
    const {docs:launches} = await res.json() as APISpaceXResponse
    return launches
}
