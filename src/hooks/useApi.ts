
import { searchedHashtags } from "../pages/SearchedHashtags";
import { IUser } from "../types/User";

const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.REACT_APP_API_KEY
}).base("app6wQWfM6eJngkD4");

const squad = "06-22"

export const useApi = () => ({
    getSearchedHashtags: async () => {
        let response = await base("Buscas")
        .select({ filterByFormula: `Squad = "${squad}"` })
        .all();

        let hashtags: searchedHashtags[] = [];
        for(let i in response) {
            let currentHashtag = {
                data: response[i].fields.Data,
                hashtag: response[i].fields.Hashtag,
            }
            hashtags.push(currentHashtag);
        }

        return hashtags;
    },
    getProjectInfo: async () => {
        let response = await base("Projeto")
        .select({ filterByFormula: `Squad = "${squad}"` })
        .all();

        return response && response[0].fields.Sobre;
    },
    getTeamUsers: async () => {
        let response = await base("Equipe")
        .select({
            filterByFormula: `Squad = "${squad}"`,
            sort: [{ field: "Nome", direction: "asc" }]
        })
        .all();

        if(response.length > 0) {
            let teamUsers: IUser[] = []; 
            for(let i in response) {
                let currentUser = {
                    name: response[i].fields.Nome,
                    description: response[i].fields.Descrição,
                    github: response[i].fields.Github,
                    email: response[i].fields.Email,
                    linkedin: response[i].fields.LinkedIn,
                    img: response[i].fields.Imagem[0].url
                }
                teamUsers.push(currentUser);
            }
            return teamUsers;
        }
    }
});