import { api } from "./posts";
 
export const getPages = async () => {
    return await api.pages
        .browse({
            limit: "all"
        })
        .catch((err: Error) => {
            console.error(err);
        }) 
}