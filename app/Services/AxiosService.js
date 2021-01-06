export const dndApi = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/spells"
})

export const sandboxApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/class/spells"
})