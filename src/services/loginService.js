import axios from "axios"

const URL = `${process.env.REACT_APP_API}/handmade`


const crearLogin = async (login) => {
    try {
        let { data } = await axios.post(`${URL}/login-custom/` , login)
        return data
    } catch (error) {
        throw error
    }
}

export {
    crearLogin,

}