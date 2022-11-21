import { UserData } from "~/classes/interfaces/userData.interface";

export const useUserData = () =>
    useState<UserData>(
        "userData",
        (): UserData => ({
            user: {
                id: null,
                name: "",
                lastName: "",
                street: "",
                houseNumber: "",
                zipcode: "",
                city: "",
                nameInfix: "",
                phoneNumber: "",
                email: "",
                birthDate: "",
                sex: "",
                houseNumberAddition: "",
            },
            partner: {
                name: "",
                lastName: "",
                gender: "",
                birthDate: "",
            },
            children: [],
            pets: [],
        })
    );

export const fetchProfileData = async () => {
    const { $mijn } = useNuxtApp();
    const userData = useUserData();

    try {
        userData.value = await $mijn.getUserData();
    } catch (e) {
        console.error(e)
    }
}