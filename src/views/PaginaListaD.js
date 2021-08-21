import { useState, useContext, useEffect } from "react"
import { ListaContext } from "../context/listaContext"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { obtenerProductosPorId } from '../services/productoService'
import { CarritoContainer, IconLista2, TituloH1, IconCarrito2, IconEliminar,btnCarrito} from "./Styles"
import {CarritoContext} from '../context/carritoContext'
import Swal from "sweetalert2"
import { useHistory, useParams } from "react-router-dom"

export default function ListaDeseos() {
    const [producto, setProducto] = useState({})
    const { lista } = useContext(ListaContext)
    const [isOpen, setIsOpen] = useState(false)
    const {anadirACarrito} = useContext(CarritoContext)
    const history = useHistory()
    const {id} = useParams()
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const {eliminarDLista} = useContext(ListaContext)
    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductosPorId(id)
            setProducto(productoObtenido)
        } catch (error) {
            console.error(error)
        }
    }
    const anadirACarritoContext = async() => {
        anadirACarrito(producto)
        const resultado = await Swal.fire({
            // position: 'top-end',
            title:"¡Añadido!",
            icon: 'success',
            iconColor: '#CDB9B9',
            text:'¿Cuál es el siguiente paso?',
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              rgba(241,205,226,0.9)
              url("http://pa1.narvii.com/6274/576a842f5ba3ce41143033d5877b95298f8b276b_00.gif")
              top
              no-repeat
            `,
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito de compras',
            confirmButtonColor: '#ac5d5d',
            denyButtonColor: '#CDB9B9' 
           
        })
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }
    const eliminarDListaContext = async() => {
        eliminarDLista(producto)
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
            history.push('/lista')
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
                    
                    Guardar para después
                    <IconLista2/>

                </TituloH1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.prod_oferta ? "5%" : "Sin Oferta"}</td>
                            <td>S/ {prod.prod_precio}</td>
                            <td>
                                <btnCarrito onClick={anadirACarritoContext}>
                                <IconCarrito2/>
                                </btnCarrito>
                                <btnEliminar onClick={eliminarDListaContext}>
                                <IconEliminar/>
                                </btnEliminar>
                                
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </CarritoContainer>
    )
}
