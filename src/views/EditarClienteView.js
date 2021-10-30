import { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"
import { editarCliente, obtenerClientesPorId} from '../services/clienteService'
import FormCliente from '../components/FormCliente'


export default function EditarClienteView() {
    const [value,setValue] = useState({
        clienteNombre:"",
        clienteTipoDoc: 0,
        clienteNroDoc: 0,
        clienteDireccion:"",
        clienteTipo:0,
        clienteEstado: false,
        clienteCorreo: "",
        password:""
    })
    const {id} = useParams()
    const history = useHistory()

    const getClientes = async () =>{
        try {
            const clienteObtenido = await obtenerClientesPorId(id)
            setValue({...clienteObtenido})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getClientes()
    }, [])

    const actualizarInput = (e) => {
        if(e.target.name === "clienteEstado"){
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
            await editarCliente(value,id)
            await Swal.fire({
                icon:'success',
                title:'Cliente editado con exito  :)!',
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
            <FormCliente 
                value={value}
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}
