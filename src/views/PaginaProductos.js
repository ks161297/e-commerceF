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

export default function PaginaProductos() {
    const [productos, setProductos] = useState([])
    const [productosOriginal, setProductosOriginal] = useState([])
    const [cargando, setCargando] = useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1, 1500])
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const inputBusqueda = useRef()
    const inputBusqueda1 = useRef()
    const inputBusqueda2 = useRef()

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }


    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductosxNombre(miBusqueda)
        // const productosFiltradosP = await obtenerProductosxNombre(miBusqueda)
        // const productosCategoria = await obtenerProductosxCategoria(miBusqueda)
        
        setProductos(productosFiltrados)
    }
    const ejecutarBusqueda1 = async () => {
        let miBusqueda = inputBusqueda1.current.value
        const productosFiltrados = await obtenerProductoxPrecio(miBusqueda)
        setProductos(productosFiltrados)
    }


    const ejecutarBusqueda2 = async () => {
        let miBusqueda = inputBusqueda2.current.value
        // const productosFiltrados = await obtenerProductosxNombre(miBusqueda)
        // const productosFiltradosP = await obtenerProductosxNombre(miBusqueda)
        const productosCategoria = await obtenerProductosxCategoria(miBusqueda)
        
        setProductos(productosCategoria)
    }
  

    useEffect(() => {
        getProductos()
    }, [])

    return (
        
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {cargando ? 
            (<CircularStatic/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <ProdTitle>
                        Catálogo
                        <IconGiftF/>
                    </ProdTitle>
                   

                       <div className="col-sm-12 col-md-6">
                           <Header5>Filtro nombre, precio, categoria</Header5>
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
                                   <h4 className="filtro">Precio
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Ingrese el precio"
                                            ref={inputBusqueda1}/>
                                            <BtnContenedor  onClick={ejecutarBusqueda1}>
                                                <IconProd/>
                                            </BtnContenedor>
                                   </h4>
                                   <h4 className="filtro">Categoria
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Ingrese la categoría"
                                            ref={inputBusqueda2}/>
                                            <BtnContenedor  onClick={ejecutarBusqueda2}>
                                                <IconProd/>
                                            </BtnContenedor>
                                   </h4>
                              
                            </div>
                           </div>
                        </div>
                    </div>
              
                <GrupoProductos productos={productos} />
            </div>)}
        <Footer/>
        </div>
        
    )
}
