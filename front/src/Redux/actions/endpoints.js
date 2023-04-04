export const allrecipes = (page) => `http://localhost:3001/recipes?page=${page}`
export const recipeid = (id) => `http://localhost:3001/recipes/${id}`
export const recipename = (string) => `http://localhost:3001/recipes/name?name=${string}`