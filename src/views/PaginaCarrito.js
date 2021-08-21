import { useState, useContext , useEffect} from "react"
import { CarritoContext } from "../context/carritoContext"
import {FaTrashAlt} from "react-icons/fa"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Swal from "sweetalert2"
import { useHistory, useParams } from "react-router-dom"
import { obtenerProductosPorId } from '../services/productoService'

import {HeroBtnWrapper, ButtonHero,ArrowForward,ArrowRight } from "./Styles"
export default function CarritoView() {
    const [producto, setProducto] = useState({})
    const { carrito } = useContext(CarritoContext)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const {id} = useParams()
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const {eliminarDCarrito} = useContext(CarritoContext)
    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductosPorId(id)
            setProducto(productoObtenido)
        } catch (error) {
            console.error(error)
        }
    }
    const eliminarDCarritoContext = async() => {
        eliminarDCarrito(producto)
        const resultado = await Swal.fire({
            title:"Ok",
            icon:'warning',
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir buscando',
            denyButtonText:'Tu lista de deseos',
            confirmButtonColor: '#ac5d5d',
            denyButtonColor: '#CDB9B9' 
        })
        if(resultado.isConfirmed){
            history.push('/productos')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }
    useEffect(() => {
        getProducto()
    }, [])


    return (
      
        <div className="container">
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>  
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Carrito de Compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                        <th>
                        
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.prod_oferta ? "10%" : "Sin Oferta"}</td>
                            <td>S/ {prod.prod_precio}</td>
                            <td>S/ {prod.prod_oferta ? 
                            prod.cantidad * prod.prod_precio * 0.9 : 
                            prod.cantidad * prod.prod_precio}</td>
                            <td>
                            <button type="button" onClick={eliminarDCarritoContext}>
                                
                                <FaTrashAlt/>

                            </button>
                            </td>
                        </tr>
                    ))}
                     
                </tbody>
               
            </table>
            <HeroBtnWrapper>
                <ButtonHero to='/checkout'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}> ¡Vamos a comprar! {hover ? <ArrowForward/> : <ArrowRight/>}</ButtonHero>
            </HeroBtnWrapper>
        </div>
    )
}

