import axios from "axios"
import {storage} from "../config/Firebase"


const URL = `${process.env.REACT_APP_API}/handmade`

const crearCliente = async (nuevoCliente) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        }
        let { data } = await axios.post(`${URL}/registrar/` , nuevoCliente, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerClientes = async() => {
    try {
        let {data} = await axios.get(`${URL}/clientes/`)
        return data 
    } catch (error) {
        throw error
    }
}

export {
    crearCliente,
    obtenerClientes,

}