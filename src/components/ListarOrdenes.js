
export default function ListarOrdenes({orden}){
    console.log(orden)
    return (
        <div>
            <div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>ordenId</th>
                        <th>cliente Id</th>
                        <th>cliente Nombre</th>
                        <th>ordenTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {orden.content.map((orden,i) => (
                        <tr key={i}>
                            <td>{orden.ordenId}</td>
                            <td>{orden.cliente.clienteId}</td>
                            <td>{orden.cliente.clienteNombre}</td>
                            <td>{orden.ordenTotal}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}