import axios from "axios"

const api = axios.create({
  baseURL: "https://api.github.com"
})
export default api
/*user / qualquer usuario retorna
o usuario atravez da api git
*/
