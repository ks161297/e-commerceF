import { useEffect } from "react";
import { useState } from "react";
import CircularStatic from '../components/Cargando'
import ListarOrdenes from "../components/ListarOrdenes";
import { obtenerOrdenes } from "../services/filtrosService";

export default function PaginaAdminOrden(){
    const [orden, setOrden] = useState([])
    const [ordenOriginal, setOrdenOriginal] = useState([])
    const [cargando, setCargando] = useState([true])


    const getOrden = async () => {
        try {
            const ordenObtenida = await obtenerOrdenes()
            setOrden(ordenObtenida)
            setOrdenOriginal(ordenObtenida)
            setCargando(false)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrden()
    }, [])

    return (
        <div>
            {cargando ?
            (<CircularStatic/>):
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="text-center" style={{color:'#BF7C7C'}}>Ordenes Registrados</h1>
                </div>
            
            <ListarOrdenes orden={orden}/>
            </div>)}
           
        </div>
    )
}