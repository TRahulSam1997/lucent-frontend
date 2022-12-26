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

export async function getAllAuthors() {
    return await api.authors
    .browse({
        limit: 'all'
    })
    .catch((err: Error) => {
        console.log(err);
    })
  }