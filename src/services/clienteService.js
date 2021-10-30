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

const obtenerClientesPorId = async(id) => {
    try {
        let {data} = await axios.get(`${URL}/admin/${id}`)
        return data
    } catch (error) {
        throw error
    }
}
 

const editarCliente = async (clienteEditado, id) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        const { data } = await axios.put(`${URL}/admin/${id}`, clienteEditado, {headers})
        return data
    } catch (error) {
        throw error
    }
}

export {
    crearCliente,
    obtenerClientes,
    editarCliente,
    obtenerClientesPorId,

}