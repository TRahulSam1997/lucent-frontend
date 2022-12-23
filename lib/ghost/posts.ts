import GhostContentAPI from "@tryghost/content-api";
  
const ghostURL: string = process.env.GHOST_URL || '';
const ghostKey: string = process.env.GHOST_KEY || '';
const ghostVersion: string = process.env.GHOST_VERSION || 'v5.0';

export const api = new GhostContentAPI({
    url: ghostURL,
    key: ghostKey,
    // @ts-expect-error
    version: ghostVersion
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.log(err);
    })
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.log(err);
    });
}