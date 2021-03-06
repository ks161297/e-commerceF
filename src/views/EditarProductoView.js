import { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"
import { editarProducto, obtenerProductosPorId} from '../services/productoService'
import FormProducto from '../components/FormProducto'


export default function EditarProductoView() {
    const [value,setValue] = useState({
        productoNombre:"",
        productoDescripcion:"",
        productoCantidad:0,
        productoEstado: false, 
        productoPrecio: 0,
        productoImagen:"",
        categoria:0
    })
    const {id} = useParams()
    const history = useHistory()

    const getProducto = async () =>{
        try {
            const productoObtenido = await obtenerProductosPorId(id)
            setValue({...productoObtenido})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getProducto()
    }, [])

    const actualizarInput = (e) => {
        if(e.target.name === "productoEstado"){
            setValue({
                ...value,
                [e.target.name]:e.target.checked
            })
            return
        }
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) =>{
        e.preventDefault()
        try{
            await editarProducto(value,id)
            await Swal.fire({
                icon:'success',
                title:'Producto editado con exito  :)!',
                showConfirmButton:false,
                timer:3000
            })
            history.push('/')
        }catch(error){
            console.log(error)
    }
}
            
  
    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto 
                value={value}
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}
