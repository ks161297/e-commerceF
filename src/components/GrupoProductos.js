import { GPContenedor, GProductos, GPWrapper,GPHeader,GPPrice,BtnRedirect,GPBody,GPFooter,GPLink,GPStock} from "./general"

export default function GrupoProductos({productos}) {
    console.log(productos)
    return (
        <GPContenedor>
            <GPWrapper>

                {productos.content.map((prod, i) => (
                    <GProductos key={i}>
                        <GPLink className="card mb-4" to={`/producto/${prod.productoId}`}>
                            <GPHeader className="card-header">
                                {prod.productoNombre}
                            </GPHeader>
                            <GPBody className="card-body">
                                <img
                                    src={prod.productoImagen}
                                    className="card-img-top"
                                    alt={prod.productoNombre}/>
                                
                                <GPPrice>S/. {prod.productoPrecio}</GPPrice>
                                <GPStock>Existen: {prod.productoCantidad}</GPStock>
                            </GPBody>
                            <GPFooter className="card-footer text-muted">
                                <BtnRedirect to={`/producto/${prod.productoId}`} >¡Mira lo que contiene!</BtnRedirect>
                            </GPFooter>
                        </GPLink>
                    </GProductos>
                ))}
            </GPWrapper>
        </GPContenedor>
     
    )}