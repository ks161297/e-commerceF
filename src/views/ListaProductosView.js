import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { obtenerProductos } from '../services/productoService'
import './estilos.css';
import Footer from '../components/Footer'
import axios from 'axios';
const URL = `${process.env.REACT_APP_API}/handmade/productos/`

export default function ListaProductos(props) {
    console.log(props)
    const [productos, setProductos] = useState([])
    const [Api,setApi] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)

        } catch (error) {
            console.error(error)
        }
    }


    // const onDelete = (id) => {
    //     axios.delete(`${URL}/${id}`)
    //     .then(() => {
    //         getProductos()
    //     })
    // }



        
    useEffect(() => {
        getProductos()
    }, [])

    return (
        <div>
            <h1 className="text-center" style={{color:'#BF7C7C'}}>Productos Registrados</h1>
            <Link className="btn btn-lg my-2" style={{backgroundColor:'#C89696',color:'white'}} to='/crear'>
                <i className="fas fa-plus"/> Registrar Producto
            </Link>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productos && props.productos.map((productos) => (
                        <tr key={productos.i}>
                            <td>{productos.content.productoNombre}</td>
                            <td>{productos.productoDescripcion}</td>
                            <td>{productos.productoPrecio}</td>
                            <td>{productos.productoCantidad}</td>
                            <td>{productos.productoEstado}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar/${productos.productoId}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                {"   "}
                                {/* <Link className="btn btn-danger btn-sm" onClick={() => onDelete(prod.productoId)} >
                                    <i className="fas fa-trash-alt"></i>
                                    
                                </Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
