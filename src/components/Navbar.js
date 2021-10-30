import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/authContext";

import {Nav, NavbarContainer, NavLogo, Navimg,CartImagen,FacebookIcon,GoogleIcon, FormButton1,FormButton2, MenuIcon, MobileIcon, NavMenu, NavItem,NavLinks, NavBtn, NavBtnLink, NavIngr,Navlist,Navcar,ButtonLista,ButtonDetalle,ButtonComprar, ButtonSign} from './general'
import logo from '../images/logoprincipal.png'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import { NavDropdown, Modal } from 'react-bootstrap'
import { CarritoContext } from "../context/carritoContext"
import { ListaContext } from "../context/listaContext"
import Badge from "@material-ui/core/Badge"
import { obtenerProductosPorId } from '../services/productoService'
import Swal from "sweetalert2"
import { useHistory, useParams } from "react-router-dom"
import {FaTrashAlt} from 'react-icons/fa'


const Navbar = ({toggle}) => {
    const { userState, signOut } = useContext(AuthContext)
    const [scrollNav, setScrollNav] = useState(false)
    const [producto, setProducto] = useState({})
    const {carrito} = useContext(CarritoContext)

 


    const {lista} = useContext(ListaContext)
    const {eliminarDLista} = useContext(ListaContext)
    const {eliminarDCarrito} = useContext(CarritoContext)

    const[show, setShow] = useState(false)
    const[show1, setShow1] = useState(false)
    const[show2, setShow2] = useState(false)
    const history = useHistory()
    const {id} = useParams()
    const changeNav = () => {
        if(window.scrollY >= 40){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductosPorId(id)
            setProducto(productoObtenido)
        } catch (error) {
            console.error(error)
        }
    }

    const eliminarDListaContext = async() => {
        eliminarDLista(producto)
        const resultado = await Swal.fire({
            title:"Ok",
            icon:'info',
            iconColor:'#ac5d5d',
            showConfirmButton:true,
            confirmButtonText:'Ir a Productos',
            confirmButtonColor: '#ac5d5d'
        })
        if(resultado.isConfirmed){
            history.push('/productos')
        }
    }
    const eliminarDCarritoContext = async() => {
        eliminarDCarrito(producto)
        const resultado = await Swal.fire({
            title:"Ok",
            icon:'info',
            iconColor:'#ac5d5d',
            showConfirmButton:true,
            confirmButtonText:'Ir a Productos',
            confirmButtonColor: '#ac5d5d'
        
        })
        if(resultado.isConfirmed){
            history.push('/productos')
        }
    }
    useEffect(() => {
        getProducto()
    }, [])
    const {signIn} = useContext(AuthContext) 

   const totalItems = carrito.reduce((total,item) => {
       return total +item.cantidad;
   },0)
   const totalItemsLista = lista.reduce((total,item) => {
         return total + item.cantidad;
    },0)

	const totalCarrito = carrito.reduce((acum, item) => {
		return acum + item.cantidad * item.content.productoPrecio;
	}, 0);


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}> 
                   <Navimg 
                        src={logo} 
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />
                        HM
                    </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <MenuIcon />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to='/'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Inicio</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='/productos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Tienda</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='/productos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Tips</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='/contactou'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Contáctenos</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink onClick={() => setShow2(true)}>
                            <Badge badgeContent={totalItemsLista} color="primary">
                                <Navlist/>
                            </Badge>
                       </NavBtnLink>
                       <Modal
                            show={show2}
                            onHide={() => setShow2(false)}
                            size="xl"
                            aria-labelledby="example-custom-modal-styling-title2">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title2">
                                    Lista de Deseos
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista.map((prod, i) => (
                                    <tr key={i}>
                                        <td>
                                            <CartImagen 
                                                className="img-thumbnail"
                                                src={prod.content.productoImagen} 
                                                alt={prod.content.productoImagen} />
                                        </td>
                                        <td>{prod.content.productoNombre}</td>
                                        <td>{prod.content.productoDescripcion}</td>
                                        <td> S/. {prod.content.productoPrecio}</td>
                                        <td>
                                        <ButtonLista  onClick={eliminarDListaContext}>
                                            <FaTrashAlt/>
                                            </ButtonLista>
                                        </td>
                                    </tr>
                                ))}
                                {totalItemsLista !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">Total de elementos:</span>
								<span> {totalItemsLista}</span>
							</li>
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
                            </tbody>
                        </table>
                        <div className="modal-footer border-top-0 d-flex justify-content-between">
                                <ButtonLista href='/lista'>Lista</ButtonLista>                            
                        </div>
                        </Modal.Body>
                        </Modal>


                       <NavBtnLink onClick={() => setShow(true)}>
                            <Badge badgeContent={totalItems} color="primary">
                                <Navcar/>
                            </Badge>
                       </NavBtnLink>
                       <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            size="xl"
                            aria-labelledby="example-custom-modal-styling-title">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    Carrito de Compra:
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito.map((prod, i) => (
                                    <tr key={i}>
                                        <td>
                                            <CartImagen 
                                                className="img-thumbnail"
                                                src={prod.content.productoImagen} 
                                                alt={prod.content.productoImagen} />
                                        </td>
                                        <td>{prod.content.productoNombre}</td>
                                        <td> S/. {prod.content.productoPrecio}</td>
                                        <td>{prod.cantidad}</td>
                                        <td>S/ {
                                                prod.cantidad * prod.content.productoPrecio}</td>
                                        <td>
                                        <ButtonLista  onClick={eliminarDCarritoContext}>
                                            <FaTrashAlt/>
                                            </ButtonLista>
                                            
                                        </td>
                                    </tr>
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
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                                <h5> Total: <span> {totalCarrito}</span></h5>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-between">
                            
                                <ButtonDetalle href="/carrito">Detalle</ButtonDetalle>
                                <ButtonComprar href="/checkout">A Comprar</ButtonComprar>                            
                        </div>
                            </Modal.Body>
                        </Modal>
                        {userState ? (
                           <NavDropdown
                                title={
                                    <div className="d-inline">
                                        <img
                                            src={userState.photoURL}
                                            className="me-2"
                                            style={{borderRadius:"50%", width:"30px"}}
                                            alt="avatar"
                                        />
                                        <span style={{color:'#fff'}}>{userState.displayName}</span>
                                    </div>
                                }
                            >
                                <NavDropdown.Item style={{color:'#fff', background:'#AC5D5D'}} onClick={signOut}>
                                    Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        ): (
                            <NavBtnLink onClick={() => setShow1(true)}>
                                <NavIngr/>
                                
                            </NavBtnLink>
                            
                        )}
                            <Modal
                            show={show1}
                            onHide={() => setShow1(false)}
                            size="lg"
                            aria-labelledby="example-custom-modal-styling-titles">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-titles">
                                    <h3>Inicia Sesión</h3> 
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div className="form-group">
                                        <label for="inputUserName"> Usuario</label>
                                        <input 
                                            type="text"
                                            className="form-control" 
                                            name="clienteCorreo"
                                            placeholder="Ingresa tu correo"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPassword" value="123456">Contraseña</label>
                                        <input className="form-control" placeholder="Ingresa tu contraseña" type="password" />
                                       
                                        <div className="modal-footer">
                                            <ButtonSign to='/listaProductos'>¡Ingresa!
                                            
                                            </ButtonSign>
                                            
                                        </div>
                                    </div>
                                </form>
                                
                            </Modal.Body>
                            <div>
                                <span className="text-center m-3"style={{color:'black'}}>También puedes ingresar con:</span>
                                    <FormButton1 onClick={signIn}>
                                        <GoogleIcon/>
                                    </FormButton1>
                                    <FormButton2>
                                        <FacebookIcon/>
                                    </FormButton2>
                                </div>
                      
                        </Modal>

                   </NavBtn>
               
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar