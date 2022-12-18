import GhostContentAPI from "@tryghost/content-api";

// declare const process: {
//     env: {
//       [key: string]: string | undefined;
//     };
//   };
  
const ghostURL: string = process.env.GHOST_URL || ''
const ghostKey: string = process.env.GHOST_KEY || ''
const ghostVersion: string = process.env.GHOST_VERSION || 'v5.0'

const api = new GhostContentAPI({
    url: ghostURL,
    key: ghostKey,
    // @ts-expect-error
    version: ghostVersion
})

export {}