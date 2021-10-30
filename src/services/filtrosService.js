import axios from "axios"
import {storage} from "../config/Firebase"


const URL = `${process.env.REACT_APP_API}/handmade`


const obtenerClienteporNombre = async(busqueda = "") => {
    try{
        let{data}=await axios.get(`${URL}/buscar-cliente?nombre=${busqueda}`)
        return data
    }catch(error){
        throw error
    }
}

const obtenerClienteporDoc = async(busqueda = "") => {
    try{
        let{data}=await axios.get(`${URL}/buscar-cliente?nro_doc=${busqueda}`)
        return data
    }catch(error){
        throw error
    }
}

const obtenerOrdenes = async() => {
    try {
        let {data} = await axios.get(`${URL}/ordenes/`)
        return data 
    } catch (error) {
        throw error
    }
}

const obtenerOrdenPorCliente = async(busqueda = "") => {
    try {
        let{data} = await axios.get(`${URL}/orden-cliente?cliente_id=${busqueda}`)
        return data
    }catch(error){
        throw error;
    }
} 

export {
    obtenerClienteporNombre,
    obtenerClienteporDoc,
    obtenerOrdenPorCliente,
    obtenerOrdenes
}