export default {
  // For local development, access at http://localhost:8082/
  // For production, site is at https://www.mendelowski.com/bootboat/
  pathPrefix: process.env.CI ? "/bootboat/" : "/"
};
