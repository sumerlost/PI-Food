export const allrecipes = (page, filtros) => `http://localhost:3001/recipes?page=${page}${filtros}`
export const recipeid = (id) => `http://localhost:3001/recipes/${id}`
export const recipename = (string) => `http://localhost:3001/recipes/name?name=${string}`