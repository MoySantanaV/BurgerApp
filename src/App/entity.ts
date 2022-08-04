export interface Product {
    _id: string,
    name: string,
    price: number,
    count: number


}

export interface Order {
    _id: string,
    clientName: string,
    productsOrdered: Product[],
    isComplete: boolean
}

export interface CurrentOrderState {
    DoubleBurger: 0,
    product2: 0,
}

export interface orderState {
    orders: Order[]
}

export interface Record {
    _id: string,
    date: string
    ordersRecorded: string,
    price: number
}

