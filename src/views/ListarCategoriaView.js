import { useEffect } from "react";
import { useState } from "react";
import { obtenerCategorias } from "../services/categoriaService";
import CircularStatic from '../components/Cargando'
import { Link } from 'react-router-dom'
import ListarCategorias from "../components/ListarCategorias";

export default function PaginaAdminProductos(){
    const [categorias, setCategorias] = useState([])
    const [categoriaOriginal, setCategoriaOriginal] = useState([])
    const [cargando, setCargando] = useState([true])


    const getCategorias = async () => {
        try {
            const categoriasObtenidas = await obtenerCategorias()
            setCategorias(categoriasObtenidas)
            setCategoriaOriginal(categoriasObtenidas)
            setCargando(false)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategorias()
    }, [])

    return (
        <div>
            {cargando ?
            (<CircularStatic/>):
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="text-center" style={{color:'#BF7C7C'}}>Categorias Registrados</h1>
                    <Link className="btn btn-lg my-2" style={{backgroundColor:'#C89696',color:'white'}} to='/crear-categoria'>
                        <i className="fas fa-plus"/> Registrar categoria
                    </Link>
                </div>
            
            <ListarCategorias categorias={categorias}/>
            </div>)}
           
        </div>
    )
}