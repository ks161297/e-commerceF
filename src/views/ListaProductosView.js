import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { obtenerProductos } from '../services/productoService'
import './estilos.css';
import Footer from '../components/Footer'
import axios from 'axios';
const URL = `${process.env.REACT_APP_API}productos`

export default function ListaProductosView() {
    const [productos, setProductos] = useState([])
    const [Api,setApi] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }


    const onDelete = (id) => {
        axios.delete(`${URL}/${id}`)
        .then(() => {
            getProductos()
        })
    }



        
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
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Colores</th>
                        <th>Materiales</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod,i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.prod_precio}</td>
                            <td>{prod.prod_descripcion}</td>
                            <td>{prod.prod_color}</td>
                            <td>{prod.prod_material}</td>
                            <td>{prod.prod_stock}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar/${prod.prod_id}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                {"   "}
                                <Link className="btn btn-danger btn-sm" onClick={() => onDelete(prod.prod_id)} >
                                    <i className="fas fa-trash-alt"></i>
                                    
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
