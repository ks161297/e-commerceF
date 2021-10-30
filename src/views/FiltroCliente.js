import { useState, useEffect, useRef } from 'react'
// import { obtenerProductos } from '../services/productoService'

import { IconGiftF,ProdTitle,Header5, IconProd, BtnContenedor } from './Styles';
import CircularStatic from '../components/Cargando'

import ListarClientes from '../components/ListarClientes';
import { obtenerClientes } from '../services/clienteService';
import { obtenerClienteporDoc, obtenerClienteporNombre } from '../services/filtrosService';

export default function PaginaProductos() {
    const [clientes, setClientes] = useState([])
    const [cargando, setCargando] = useState(true)

    const inputBusqueda = useRef()
    const inputBusqueda1 = useRef()

    const getClientes = async () => {
        try {
            const clientesObtenidos = await obtenerClientes()
            setClientes(clientesObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }


    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const clientesFiltrados = await obtenerClienteporNombre(miBusqueda)
        // const productosFiltradosP = await obtenerProductosxNombre(miBusqueda)
        // const productosCategoria = await obtenerProductosxCategoria(miBusqueda)
        
        setClientes(clientesFiltrados)
    }
    const ejecutarBusqueda1 = async () => {
        let miBusqueda = inputBusqueda1.current.value
        const clientesFiltrados = await obtenerClienteporDoc(miBusqueda)
        setClientes(clientesFiltrados)
    }


  

    useEffect(() => {
        getClientes()
    }, [])

    return (
        
        <div>
            
            {cargando ? 
            (<CircularStatic/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <ProdTitle>
                        Filtro Clientes 
                        <IconGiftF/>
                    </ProdTitle>
                   

                       <div className="col-sm-12 col-md-6">
                           <Header5>Filtro nombre o documento</Header5>
                           <div className="dropdown ">
                               <span>Desliza el mouse para ver las opciones</span>
                               <div className="dropdown-content">
                                   <h4 className="filtro">Nombre
                                   
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Ingrese el nombre"
                                            ref={inputBusqueda}/>
                                            <BtnContenedor  onClick={ejecutarBusqueda}><IconProd/>
                                            </BtnContenedor>
                                   </h4>
                                   <h4 className="filtro">Documento
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Ingrese el documento"
                                            ref={inputBusqueda1}/>
                                            <BtnContenedor  onClick={ejecutarBusqueda1}>
                                                <IconProd/>
                                            </BtnContenedor>
                                   </h4>
                                  
                              
                            </div>
                           </div>
                        </div>
                    </div>
              
                <ListarClientes clientes={clientes} />
            </div>)}
        </div>
        
    )
}
