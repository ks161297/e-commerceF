import { useState, useEffect, useRef } from 'react'
import { obtenerProductos } from '../services/productoService'
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
    const [filtroPrecio, setFiltroPrecio] = useState([1, 100])
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const inputBusqueda = useRef()

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

    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }
    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        setProductos(productosFiltrados)
    }

    useEffect(() => {
        getProductos()
    }, [])

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod) => {
            return prod.prod_precio >= filtroPrecio[0] && prod.prod_precio <= filtroPrecio[1]
        })
        setProductos(productosFiltrados)
    }, [filtroPrecio])
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
                    <div className="row my-2">
                       <div className="col-12 col-md-6">
                           <Header5>Filtrar Por precio</Header5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={1}
                                max={120}
                                color='secondary'
                            />
                       </div>

                       <div className="col-sm-12 col-md-6">
                           <Header5>Filtro por nombre, material ó color</Header5>
                           <div className="d-flex gap-1">
                               <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}
                               />
                               <BtnContenedor  onClick={ejecutarBusqueda}>
                                    <IconProd/>
                               </BtnContenedor>
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
