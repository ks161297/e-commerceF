import { useState, useEffect, useRef } from 'react'
// import { obtenerProductos } from '../services/productoService'
import {obtenerProductos, obtenerProductosxNombre, obtenerProductoxPrecio,obtenerProductosxCategoria} from '../services/productoService'
import GrupoProductos from '../components/GrupoProductos';
import Slider from '@material-ui/core/Slider';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import { IconGiftF,ProdTitle,Header5, IconProd, BtnContenedor } from './Styles';
import CircularStatic from '../components/Cargando'
import Footer from '../components/Footer'
import ListarCategorias from '../components/ListarCategorias';
import ListarClientes from '../components/ListarClientes';
import { obtenerClientes } from '../services/clienteService';
import { obtenerClienteporDoc, obtenerClienteporNombre, obtenerOrdenes, obtenerOrdenPorCliente } from '../services/filtrosService';
import ListarOrdenes from '../components/ListarOrdenes';

export default function FiltroOrdenes() {
    const [orden, setOrden] = useState([])
    const [cargando, setCargando] = useState(true)

    const inputBusqueda = useRef()

    const getClientes = async () => {
        try {
            const clientesObtenidos = await obtenerOrdenes()
            setOrden(clientesObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }


    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const clientesFiltrados = await obtenerOrdenPorCliente(miBusqueda)
        // const productosFiltradosP = await obtenerProductosxNombre(miBusqueda)
        // const productosCategoria = await obtenerProductosxCategoria(miBusqueda)
        
        setOrden(clientesFiltrados)
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
                        Filtro Orden
                        <IconGiftF/>
                    </ProdTitle>
                   

                       <div className="col-sm-12 col-md-6">
                           <Header5>Filtro por cliente_id</Header5>
                           <div className="dropdown ">
                               <span>Desliza el mouse para ver las opciones</span>
                               <div className="dropdown-content">
                                   <h4 className="filtro">cliente_id
                                   
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Ingrese el id"
                                            ref={inputBusqueda}/>
                                            <BtnContenedor  onClick={ejecutarBusqueda}><IconProd/>
                                            </BtnContenedor>
                                   </h4>
                                 
                                  
                              
                            </div>
                           </div>
                        </div>
                    </div>
              
                <ListarOrdenes orden={orden} />
            </div>)}
        </div>
        
    )
}
