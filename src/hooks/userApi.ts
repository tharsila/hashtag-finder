import  User  from "../types/User"

const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.REACT_APP_API_KEY
}).base("app6wQWfM6eJngkD4");


const squad = "06-22"

export const Api = () =>({
    SignIn: async (Email: string, Senha: string) => {
        let response = await base("Login")
        .select({ filterByFormula: `Squad = "${ squad }"`})
        .firstPage();

        console.log(response[0]);
        return response[0].fields;
    }
});
