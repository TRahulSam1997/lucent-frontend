import GhostContentAPI from "@tryghost/content-api";

// declare const process: {
//     env: {
//       [key: string]: string | undefined;
//     };
//   };
  
const api = new GhostContentAPI({
    url: process.env.GHOST_VERSION || '',
    key: process.env.GHOST_VERSION || '',
    // @ts-expect-error
    version: process.env.GHOST_VERSION
})

export {}