import { useEffect } from "react";
import { useState } from "react";
import { obtenerProductos } from "../services/productoService";
import CircularStatic from '../components/Cargando'
import { IconGiftF, ProdTitle } from "./Styles";
import { Link } from 'react-router-dom'
import ListarProductos from "../components/ListarProductos";

export default function PaginaAdminProductos(){
    const [productos, setProductos] = useState([])
    const [productoOriginal, setProductoOriginal] = useState([])
    const [cargando, setCargando] = useState([true])


    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductoOriginal(productosObtenidos)
            setCargando(false)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    }, [])

    return (
        <div>
            {cargando ?
            (<CircularStatic/>):
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="text-center" style={{color:'#BF7C7C'}}>Productos Registrados</h1>
                    <Link className="btn btn-lg my-2" style={{backgroundColor:'#C89696',color:'white'}} to='/crear-producto'>
                        <i className="fas fa-plus"/> Registrar Producto
                    </Link>
                </div>
            
            <ListarProductos productos={productos}/>
            </div>)}
           
        </div>
    )
}