import {useState} from "react"

import {crearProducto} from '../services/productoService'
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import FormProducto from '../components/FormProducto'


export default function CrearProductoView(){
    const [value, setValue] = useState(
        {
            productoNombre:"",
            productoDescripcion:"",
            productoCantidad:0,
            productoEstado: false, 
            productoPrecio: 0,
            productoImagen:"",
            categoria:0
        }
    )
    const history = useHistory()

    const actualizarInput = (e) => {
        if (e.target.name === "productoEstado"){
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
            
            await crearProducto({...value})
            await Swal.fire({
                icon:'success',
                title:'Producto creado :)!',
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
            <h1 className="text-center" style={{color:'#BF7C7C'}}>Registrar Producto</h1>
            
            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            
            />
        </div>
            )
}