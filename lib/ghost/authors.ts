import { api } from "./posts";

export const getAuthor = async (authorSlug:string) => {
    return await api.authors
        .read({
            slug: authorSlug
        })
        .catch((err: Error) => {
            console.log(err);
        });
}

export const getAllAuthors = async () => {}