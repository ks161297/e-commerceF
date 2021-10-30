import {useState} from "react"

import {crearCliente} from '../services/clienteService'
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import FormCliente from '../components/FormCliente'

export default function CrearClienteView(){
    const [value, setValue] = useState(
        {
            clienteNombre:"",
            clienteTipoDoc: 0,
            clienteNroDoc: 0,
            clienteDireccion:"",
            clienteTipo:0,
            clienteEstado: false,
            clienteCorreo: "",
            password:""
        }
    )
    const history = useHistory()

    const actualizarInput = (e) => {
        if (e.target.name === "clienteEstado"){
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
            await crearCliente({...value})
            await Swal.fire({
                icon:'success',
                title:'Cliente creado :)!',
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
            
            <FormCliente 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            
            />
        </div>
            )
}