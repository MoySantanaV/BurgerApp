import axios, { AxiosResponse } from 'axios'
import { Order, Product, Record } from '../App/entity'


const url = 'http://localhost:4000/api'


// GET
export const getAllProducts = async () => {
     const { data }: AxiosResponse = await axios({
        url: `${url}/getAllProducts`,
        method: 'GET'
    })

    return data
}

export const getAllOrders = async () => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/getAllOrders`,
        method: 'GET'
    })

    return data
}

export const getAllRecords = async () => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/getAllRecords`,
        method: 'GET'
    })


    const mapper = (data: any) => {
       return data.map((order:any)=> {
              const ordersRecorded = order.ordersRecorded.join(", ")
              return {
                ...order,
                ordersRecorded
              } 
        })
/*         const orderRecorded = data?.ordersRecorded.map((item: any) => item.name);
        return {
            ...data,
            orderRecorded
        } */
    }
    
    return mapper(data)
}

// POST
export const postProduct = async (product: Partial<Product>) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/postProduct`,
        method: 'POST',
        data: product
    })
}

export const postOrder = async (order: Partial<Order>) => {
    
    const { data }: AxiosResponse = await axios({
        url: `${url}/postOrder`,
        method: 'POST',
        data: order
    })
}

export const postRecord = async (record: Partial<Record>) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/postRecord`,
        method: 'POST',
        data: record
    })
}

// patch
export const patchProduct = async (product: Partial<Product>) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/updateProduct/${product._id}`,
        method: 'PATCH',
        data: product
    })

} 

export const patchOrder = async (order: Partial<Order>) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/updateProduct/${order._id}`,
        method: 'PATCH',
        data: order
    })

}

export const patchRecord = async (record: Partial<Record>) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/updateProduct/${record._id}`,
        method: 'PATCH',
        data: record
    })

}

//delete
export const deleteProduct = async (id: string) => {
    const { data }: AxiosResponse = await axios({
        url: `${url}/deleteProduct/${id}`,
        method: 'DELETE'
    })

}

export const deleteOrder = async (id: string) => {
    const { data } : AxiosResponse = await axios({
        url: `${url}/deleteOrder/${id}`,
        method: 'DELETE'
    })
}

export const deleteRecord = async (id: string) => {
    const { data } : AxiosResponse = await axios({
        url: `${url}/deleteRecord/${id}`,
        method: 'DELETE'
    })
}