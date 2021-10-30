import { Link } from 'react-router-dom'


export default function ListarCategorias({categorias}){
    
    return (
        <div>
            <div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.content.map((cat,i) => (
                        <tr key={i}>
                            <td>{cat.categoriaNombre}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar-cat/${cat.categoriaId}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                {"   "}
                                <Link className="btn btn-danger btn-sm" to={`/eliminar-cat/${cat.categoriaId}`}>
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