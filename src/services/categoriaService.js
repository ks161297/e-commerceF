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

const obtenerCategoriasPorId = async(id) => {
    try {
        let {data} = await axios.get(`${URL}/categoria/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const editarCategoria = async (categoriaEditada, id) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        const { data } = await axios.put(`${URL}/categoria/${id}`, categoriaEditada, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const eliminarCategoria = async(id) => {
    try{
        const {data} = await axios.delete(`${URL}/categoria/${id}`)
        return data
    
    }catch (error){
        throw error
    }
}

export {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriasPorId,
    editarCategoria,
    eliminarCategoria
}