import { useEffect, useState } from "react";
import CircularStatic from '../components/Cargando'
import { Link } from 'react-router-dom'
import ListarClientes from "../components/ListarClientes";
import { obtenerClientes } from "../services/clienteService";

export default function PaginaAdminClientes(){
    const [clientes, setClientes] = useState([])
    const [clienteOriginal, setClienteOriginal] = useState([])
    const [cargando, setCargando] = useState([true])


    const getClientes = async () => {
        try {
            const clientesObtenidos = await obtenerClientes()
            setClientes(clientesObtenidos)
            setClienteOriginal(clientesObtenidos)
            setCargando(false)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClientes()
    }, [])

    return (
        <div>
            {cargando ?
            (<CircularStatic/>):
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="text-center" style={{color:'#BF7C7C'}}>Clientes Registrados</h1>
                    <Link className="btn btn-lg my-2" style={{backgroundColor:'#C89696',color:'white'}} to='/crear-cliente'>
                        <i className="fas fa-plus"/> Registrar clientes
                        
                    </Link>
                    <Link className="btn btn-lg my-2" style={{backgroundColor:'#C89696',color:'white'}} to='/filtro-cli'>
                        <i className="fas fa-plus"/> Filtros
                        
                    </Link>
                </div>
            
            <ListarClientes clientes={clientes}/>
            </div>)}
           
        </div>
    )
}