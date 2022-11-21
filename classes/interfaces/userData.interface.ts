export interface UserData {
    user: User
    partner: Partner
    children: Array<Child>
    pets: Array<Pet>
}

export interface Partner {
    id?: number
    name: string
    lastName: string
    gender: string
    birthDate: string
}

export interface User {
    id: number | null,
    name: string
    lastName: string
    street: string
    houseNumber: string
    zipcode: string
    city: string
    nameInfix: string
    phoneNumber: string
    email: string
    birthDate: string
    sex: string
    houseNumberAddition: string
}

export interface Child {
    userId?: number
    name: string
    gender: string
    lastName: string
    id?: number
    birthDate: string
}

export interface Pet {
    userId?: number
    name: string
    age: number
    breedId: number
    gender: string
    type: string
    id?: number
}