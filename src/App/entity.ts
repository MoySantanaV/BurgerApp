export interface Product {
    id: string,
    name: string,
    price: number,
    count: number


}

export interface Order {
    idOrder: string,
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

