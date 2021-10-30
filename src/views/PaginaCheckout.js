import { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useHistory, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import {CarritoContainer, TituloH1,CartImagen, IconEliminar, HeroBtnWrapper,ButtonHero,ArrowForward,ArrowRight} from "./Styles"


export default function PaginaCheckout() {
	const { carrito } = useContext(CarritoContext);
	const [producto, setProducto] = useState({})
	const history = useHistory()
	const {eliminarDCarrito} = useContext(CarritoContext)
	const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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

	let total = 0;

	total = carrito.reduce((acum, item) => {
		return acum + item.cantidad * item.content.productoPrecio;
	}, 0);

	const recibirSubmit = (datos) => {
		console.log(datos);
	};

	return (
		<CarritoContainer>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>  
            <div className="my-4 text-center">
                <TituloH1 className="fw-bold">
                    Verificar Compra
                    
                </TituloH1>
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-5" style={{marginLeft:'100px', marginTop:'50px'}}>
                        <h4>Estos son los elementos que tienes para comprar:</h4>
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
										Cantidad: {prod.cantidad}
                                       
                                    </div>
                                    <div>
                                    <btnEliminar onClick={eliminarDCarritoContext}>
                                        <IconEliminar/>
                                    </btnEliminar>
                                    <div>S/ {prod.cantidad * prod.content.productoPrecio}</div> 
                                    
                                    
								</div>
                                </li>
                            ))}
                            {total !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">Precio Total:</span>
								<span> {total}</span>
							</li>
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
                        </ul>

                    </div>
					<div className="col-sm-12 col-md-6" style={{marginTop:'30px'}}>
					<h4>Ingrese sus datos:</h4>
					<form onSubmit={handleSubmit(recibirSubmit)}>
		 				<div className="mb-2">
		 					<label className="form-label">Nombres y apellidos</label>
		 					<input
								type="text"
								className="form-control"
								placeholder="Ingrese su nombre y apellidos"
								{...register("nombreCompleto", { required: true })}
							/>
							{errors.nombreCompleto && (
								<small className="text-danger">Este campo es obligatorio</small>
							)}
						</div>
						<div className="mb-2">
							<label className="form-label">Número de celular</label>
							<input
								type="text"
								className="form-control"
								placeholder="+51 994979361"
								{...register("telefono", {
									minLength: { value: 6, message: "Se requiere 6 dígitos" },
                                    maxLength: { value: 14, message: "Máximo 14 dígitos"}
								})}
							/>
							{errors.telefono && (
								<small className="text-danger">{errors.telefono.message}</small>
							)}
						</div>
						<div className="mb-2">
							<label className="form-label">Dirección</label>
							<input
								type="text"
								className="form-control"
								placeholder="Cayma"
                                {...register("direccion", {pattern: /^[A-Za-z]$/})}
							/>
                            {errors.direccion && (
								<small className="text-danger">El formato no es adecuado</small>
							)}
						</div>
						<HeroBtnWrapper>
                            <ButtonHero to='/checkout'
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}> ¡Vamos a comprar! {hover ? <ArrowForward/> : <ArrowRight/>}</ButtonHero>
                        </HeroBtnWrapper>
					</form>
				</div>

                </div>
            </div>
        </CarritoContainer>
		
	);
}
