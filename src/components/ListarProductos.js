import { Link } from 'react-router-dom'
export default function ListarProductos({productos}){
    console.log(productos)
    return (
        <div>
            <div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.content.map((prod,i) => (
                        <tr key={i}>
                            <td>{prod.productoNombre}</td>
                            <td>{prod.productoDescripcion}</td>
                            <td>{prod.productoPrecio}</td>
                            <td>{prod.productoCantidad}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar/${prod.productoId}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                {"   "}
                                <Link className="btn btn-danger btn-sm" >
                                    <i className="fas fa-trash-alt"></i>
                                    
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}