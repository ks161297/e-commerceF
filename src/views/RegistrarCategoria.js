import {useState} from "react"

import {crearCategoria} from '../services/categoriaService'
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import FormCategoria from '../components/FormCategoria'

export default function CrearCategoriaView(){
    const [value, setValue] = useState(
        {
            categoriaNombre:"",
            categoriaEstado: false,
        }
    )
    const history = useHistory()

    const actualizarInput = (e) => {
        if (e.target.name === "categoriaEstado"){
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

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await crearCategoria({...value})
            await Swal.fire({
                icon:'success',
                title:'Categoria creada :)!',
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
            <h1 className="text-center" style={{color:'#BF7C7C'}}>Registrar Categoría</h1>
            
            <FormCategoria 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            
            />
        </div>
            )
}