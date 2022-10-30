import { UserData, Child, Pet, Partner } from "../interfaces/userData.interface";

export default class UserDataPresenter {
    static transformApiUserData(data: any): UserData {
        return {
            user: {
                name: data.name,
                lastName: data.last_name,
                street: data.info.street,
                houseNumber: data.info.house_number,
                zipcode: data.info.postcode,
                city: data.info.city,
                nameInfix: data.info.name_infix,
                phoneNumber: data.info.phone_number,
                email: data.email,
                birthDate: data.info.birth_date,
                sex: data.info.sex,
                houseNumberAddition: data.info.address_addition
            },
            partner: UserDataPresenter.transformPartnerToFront(data.partner),
            children: UserDataPresenter.transformChildrenToFront(data.children ? data.children : []),
            pets: UserDataPresenter.transformPetsToFront(data.pets ? data.pets : []),
        }
    }

    static transformPartnerToFront(partner: any) {
        if (partner) {
            return {
                id: partner.id,
                name: partner.name,
                lastName: partner.last_name,
                gender: partner.gender,
                birthDate: partner.birth_date
            }
        } else {
            return { 
                name: '',
                lastName: '',
                gender: '',
                birthDate: ''
            }
        }   
    }

    static transformUserData(data: any): any {
        return {
            name: data.name,
            last_name: data.lastName,
            street: data.street,
            house_number: data.houseNumber,
            postcode: data.zipcode,
            city: data.city,
            name_infix: data.nameInfix,
            phone_number: data.phoneNumber,
            email: data.email,
            birth_date: data.birthDate,
            sex: data.sex,
            address_addition: data.houseNumberAddition
        }
    }

    static transformPartnerToBack(partner: any): any {
        return {
            name: partner.name,
            last_name: partner.lastName,
            gender: partner.gender,
            birth_date: partner.birthDate
        }
    }

    static transformChildToBack(child: any): any {
        return {
            name: child.name,
            last_name: child.lastName,
            gender: child.gender,
            birth_date: child.birthDate
        }
    }

    static transformPetToBack(pet: any): any {
        return {
            name: pet.name,
            breed_id: pet.breedId,
            gender: pet.gender,
            age: pet.age,
            type: pet.type
        }
    }

    static transformChildrenToFront(children: any): Array<Child> {
        if (children.length > 0) {
            return children.map((child: any) => {
                return {
                    name: child.name,
                    gender: child.gender,
                    lastName: child.last_name,
                    id: child.id,
                    key: child.id,
                    birthDate: child.birth_date,
                }
            })
        } else {
            return []
        }
    }

    static transformPetsToFront(pets: any): Array<Pet> {
        if (pets.length > 0) {
            return pets.map((pet: any) => {
                return {
                    userId: pet.user_id,
                    name: pet.name,
                    age: pet.age,
                    breedId: pet.breed_id,
                    gender: pet.gender,
                    type: pet.type,
                    id: pet.id,
                    key: pet.id,
                }
            })
        } else {
            return []
        }
    }
}