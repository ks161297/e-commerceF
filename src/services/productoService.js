import axios from "axios"
import {storage} from "../config/Firebase"


const URL = `${process.env.REACT_APP_API}/handmade`

const obtenerProductos = async() => {
    try {
        let {data} = await axios.get(`${URL}/productos/`)
        return data 
    } catch (error) {
        throw error
    }
}

const obtenerProductosxNombre = async(busqueda = "") => {
    try{
        let{data}=await axios.get(`${URL}/filtro-productos?nombre=${busqueda}`)
        return data
    }catch(error){
        throw error
    }
}

const obtenerProductoxPrecio = async(busqueda = "") => {
    try {
        let {data} = await axios.get(`${URL}/filtro-productos?precio=${busqueda}`)
        return data
    }catch(error){
        throw error
    }
}

const obtenerProductosxCategoria = async(busqueda = "") => {
    try {
        let {data} = await axios.get(`${URL}/producto-categoria?categoria_id=${busqueda}`)
        return data
    }catch(error){
        throw error
    }
}

const obtenerProductosPorId = async(id) => {
    try {
        let {data} = await axios.get(`${URL}/producto/${id}`)
        return data
    } catch (error) {
        throw error
    }
}
 


const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        }
        let { data } = await axios.post(`${URL}/productos/` , nuevoProducto, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const editarProducto = async (categoriaEditada, id) => {
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
const eliminarProducto = async (productoliminado, id) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        const { data } = await axios.delete(`${URL}/${id}`, productoliminado, {headers})
        return data
    } catch (error) {
        throw error
    }
}


const subirArchivo = (imagen) => {
    return new Promise((resolve, reject) => {
        let refStorage = storage.ref(`${URL}/subir-imagen/` , imagen)
        let tareaSubir = refStorage.put(imagen)

        tareaSubir.on("state_changed",
            () => {},
            (error) => {reject(error)},
            () => {
                tareaSubir.snapshot.ref.getDownloadURL()
                .then((urlImagen) => {
                    resolve(urlImagen)
                })
            }
        )
    })
}

export {
    obtenerProductos,
    obtenerProductosxNombre,
    obtenerProductoxPrecio,
    obtenerProductosPorId,
    obtenerProductosxCategoria,
    crearProducto,
    editarProducto,
    subirArchivo,
    eliminarProducto
}