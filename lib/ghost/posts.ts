import GhostContentAPI from "@tryghost/content-api";

declare const process: {
    env: {
      [key: string]: string | undefined;
    };
  };
  
const api = new GhostContentAPI({
    url: '',
    key: '',
    version: process.env.GHOST_VERSION
    // version: 'v5.0'
})

export {}