const contentful = require("contentful");
const { space } = require("postcss/lib/list");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFULL_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFULL_ACCESS_TOKEN,
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
export default client;
