import axios from "axios"
import {storage} from "../config/Firebase"


const URL = `${process.env.REACT_APP_API}/handmade`

const crearCategoria = async (nuevaCategoria) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        }
        let { data } = await axios.post(`${URL}/categorias/` , nuevaCategoria, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerCategorias = async() => {
    try {
        let {data} = await axios.get(`${URL}/categorias/`)
        return data 
    } catch (error) {
        throw error
    }
}

export {
    crearCategoria,
    obtenerCategorias,

}