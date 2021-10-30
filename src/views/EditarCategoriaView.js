import { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"
import { editarCategoria, obtenerCategoriasPorId} from '../services/categoriaService'
import FormCategoria from '../components/FormCategoria'


export default function EditarCategoriaView() {
    const [value,setValue] = useState({
        categoriaNombre:"",
        categoriaEstado: false,
    })
    const {id} = useParams()
    const history = useHistory()

    const getCategoria = async () =>{
        try {
            const categoriaObtenida = await obtenerCategoriasPorId(id)
            setValue({...categoriaObtenida})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getCategoria()
    }, [])

    const actualizarInput = (e) => {
        if(e.target.name === "categoriaEstado"){
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
            await editarCategoria(value,id)
            await Swal.fire({
                icon:'success',
                title:'Categoria editada con exito  :)!',
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
            <FormCategoria 
                value={value}
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}
