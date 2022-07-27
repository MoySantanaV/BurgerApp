export interface Product {
    id: string,
    name: string,
    price: number,


}

export interface Order {
    id: number,
    clientName: string,
    products: Product[],
    price: number,
    complete: boolean
}

export interface CurrentOrderState {
    DoubleBurger: 0,
    product2: 0,
}

export interface orderState {
    orders: Order[]
}

