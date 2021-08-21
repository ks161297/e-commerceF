import { useState, useEffect } from "react"
import { useHistory} from "react-router-dom"
import Swal from "sweetalert2"

import { crearProducto,subirArchivo} from "../services/productoService"
import FormProducto from "../components/FormProducto"


let imagen;
export default function CearProductoView() {
    const [value,setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_color:'',
        prod_material:'',
        prod_stock:0,
        prod_oferta:false,
    })

    const history = useHistory()

    const actualizarInput = (e) => {
        if(e.target.name === "prod_oferta"){
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
        try {
            const urlArchivo = await subirArchivo(imagen)
            await crearProducto({...value, prod_imagen: urlArchivo})
            await Swal.fire({
                icon:'success',
                title:'Producto creado!',
                showConfirmButton:false,
                timer:3000
            })
            history.push('/')
        } catch (error) {
            console.log(error)
        }  
    }

    const manejarImagen = (e) =>{
        e.preventDefault()
        imagen = e.target.files[0]
    }

    return (
        <div>
            <h1 className="text-center" style={{color:'#BF7C7C'}}>Registrar Producto</h1>

            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
                manejarImagen={manejarImagen}
            />
        </div>
    )
}
