import axios, { AxiosResponse } from 'axios'

const url = 'http://localhost:4000/api'

export const getAllProducts =async () => {
    const {data}:AxiosResponse = await axios({
        url: `${url}/getAllProducts`,
        method: 'GET'
    })

    return data
}

export const getAllOrders =async () => {
    const {data}:AxiosResponse = await axios({
        url: `${url}/getAllOrders`,
        method: 'GET'
    })

    return data
}

export const getAllRecords =async () => {
    const {data}:AxiosResponse = await axios({
        url: `${url}/getAllRecords`,
        method: 'GET'
    })

    return data
}