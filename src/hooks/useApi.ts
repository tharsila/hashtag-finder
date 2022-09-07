import { searchedHashtags } from "../pages/SearchedHashtags";

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
    }
});