import { Link } from 'react-router-dom'
export default function ListarClientes({clientes}){
    console.log(clientes)
    return (
        <div>
            <div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nro. Documento</th>
                        <th>Tipo</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.content.map((cli,i) => (
                        <tr key={i}>
                            <td>{cli.clienteNombre}</td>
                            <td>{cli.clienteNroDoc}</td>
                            <td>{cli.clienteTipo}</td>
                            <td>{cli.clienteCorreo}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar/${cli.clienteId}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                {"   "}
                                <Link className="btn btn-danger btn-sm">
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