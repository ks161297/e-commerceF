import { useState, useContext , useEffect} from "react"
import { CarritoContext } from "../context/carritoContext"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Swal from "sweetalert2"
import Footer from '../components/Footer'
import { CarritoContainer, TituloH1, CartImagen ,IconEliminar} from "./Styles"

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
    const totalItems = carrito.reduce((total,item) => {
        return total +item.cantidad;
    },0)
    
 
     const totalCarrito = carrito.reduce((acum, item) => {
         return acum + item.cantidad * item.content.productoPrecio;
     }, 0);
 
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
        <CarritoContainer>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>  
            <div className="my-4 text-center">
                <TituloH1 className="fw-bold">
                <i className="fas fa-shopping-cart me-3"/>
                    Carrito de compras
                </TituloH1>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6">
                        <h4>Estos son los elementos que tienes en tu lista:</h4>
                        <ul className="list-group">
                            {carrito.map((prod,i) => (
                                <li className="list-group-item d-flex justify-content-between"
                                key={i}>
                                    <div>
                                        <span className="fw-bold">{prod.content.productoNombre}</span>
                                        <br />
                                        <small>
                                        <CartImagen 
                                            className="img-thumbnail"
                                            src={prod.content.productoImagen} 
                                            alt={prod.content.productoImagen} />

                                        </small>

                                    </div>
                                    <div>
                                        <br /><br /><br />
                                        Descripción: {prod.content.productoDescripcion}
                                        <br />
                                    </div>
                                    <div>
                                    <btnEliminar onClick={eliminarDCarritoContext}>
                                        <IconEliminar/>
                                    </btnEliminar>
                                    <div>S/ {prod.cantidad * prod.content.productoPrecio}</div> 
                                    
                                    
								</div>
                                </li>
                            ))}
                            {totalItems !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">Total de elementos:</span>
								<span> {totalItems}</span>
                                <span className="fw-bold">Precio total:</span>
								<span> {totalCarrito}</span>
							</li>
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
                        
                        </ul>
                        <HeroBtnWrapper>
                            <ButtonHero href='/checkout'
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}> ¡Vamos a comprar! {hover ? <ArrowForward/> : <ArrowRight/>}</ButtonHero>
                        </HeroBtnWrapper>

                    </div>

                </div>
            </div>
            <Footer/>
        </CarritoContainer>
      
    )
}

