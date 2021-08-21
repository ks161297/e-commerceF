import {useState, useEffect, useContext} from 'react'
import {CarritoContext} from '../context/carritoContext'
import { ListaContext } from '../context/listaContext'
import {useParams} from "react-router-dom"
import { obtenerProductosPorId } from '../services/productoService'
import CircularStatic from '../components/Cargando'
import Swal from "sweetalert2"
import { useHistory } from 'react-router'
import { DetProContainer, DetFIlas, ImagenContainer, ImagenProd, ContainerBody, CardBody, DeTitulo,DeDescr,DetPrecio,BtnContainer,DetButton, IconCarrito, IconLista, DetColor, DetMaterial } from './Styles'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'


export default function ProductoView(props) {
    console.log(props)
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const { id } = useParams()

    const history = useHistory()

    const {anadirACarrito} = useContext(CarritoContext)
    const {anadirALista} = useContext(ListaContext)

    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductosPorId(id)
            setProducto(productoObtenido)
            setCargando(false)
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

    const anadirAListaContext = async() => {
        anadirALista(producto)
        const resultado = await Swal.fire({
            // position: 'top-end',
            title:"¡Hecho!",
            icon: 'success',
            iconColor: '#CDB9B9',
            text:'¿Y Ahora?',
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              rgba(241,205,226,0.9)
              url("https://i.pinimg.com/originals/39/d4/73/39d473c0f8b7b8c42e02ccc9253a7b50.gif")
              top
              no-repeat
            `,
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
        <div>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           {cargando ? 
           (<CircularStatic />) : 
           (<DetProContainer className="container">
               <DetFIlas className="row no-gutters">
                   <ImagenContainer className="col-md-8">
                   <ImagenProd 
                        className="img-fluid"
                        src={producto.prod_imagen}
                        alt={producto.prod_nombre} />
                   </ImagenContainer>
                   <ContainerBody className="col-md-4">
                       <CardBody className = "card-body">
                           <DeTitulo className="fw-bold">{producto.prod_nombre}</DeTitulo>
                           <DeDescr className="fw-bold"><hr/> {producto.prod_descripcion}<hr/></DeDescr>
                           <DetColor> {producto.prod_color}</DetColor>
                           <DetMaterial>{producto.prod_material}</DetMaterial>
                           <DetPrecio>S/. {producto.prod_precio}</DetPrecio>
                           
                        <BtnContainer>
                           <DetButton 
                            onClick={anadirACarritoContext}> Añadir a Carrito
                                <IconCarrito/>
                            </DetButton>
                            <DetButton
                            onClick={anadirAListaContext}>
                                <IconLista/>
                            </DetButton>
                        </BtnContainer>

                       </CardBody>
                   </ContainerBody>
               </DetFIlas>
           </DetProContainer>)}
           <Footer/>
        </div>
    )
}