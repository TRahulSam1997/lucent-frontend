import { api } from "./posts";
 
const getPages = async () => {
    return await api.pages
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        }) 
}