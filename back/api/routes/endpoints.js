const endpointPreload = (API_KEY) => `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
const endpointID = (id, API_KEY) => `https://api.spoonacular.com/recipes/${id}/information?addRecipeInformation=true&apiKey=${API_KEY}`

module.exports = { endpointID, endpointPreload }