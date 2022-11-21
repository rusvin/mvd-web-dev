export const useRules = {
    required: (name: string = "Field") => {
        return (v: any) => !!v || name + " is verplicht";
    },
    phoneNumber: v =>
        /^((06){1}[1-9]{1}[0-9]{7})$/.test(v) ||
        "Mobiele telefoonnummer is incorrect",
    email: v => /.+@.+/.test(v) || 'E-mailadres is incorrect',
    zipCode: v => /^\d{4}(\s|)[a-z]{2}$/i.test(v) || 'Je postode is incorrect',
    minLength: (length: number, name: string = "Field") => {
        return v => (v && v.length >= length) || `${name} moet minimaal ${length} karakters hebben`
    },
    confirmed: (confirmFieldValue: number, name: string) => {
        return v => (v && v == confirmFieldValue) || `${name} komen niet overeen.`
    }
};