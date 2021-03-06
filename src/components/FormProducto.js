import { useRef } from "react";
import { ButtonReg } from "./general";
import imgLogin from "../images/login.jpg"

export default function FormProducto({
    value,
    actualizarInput,
    manejarSubmit,
}) {

    const inputFile = useRef()
    return (
        <div className="row" style={{height:'calc(100vh - 60px)'}}>
        <div className="col-sm-10 col-md-4" style={{ height:'100%',overflow:'hidden'}}>
            <img 
                src={imgLogin} 
                style={{
                    position: 'absolute',
                    maxHeight:'100%',
                    objectFit:'cover'
                }}
                alt="imagen login"
            />
        </div>
        <div className="col-sm-2 col-md-8 d-flex justify-content-center align-items-center">
            <form onSubmit={(e) =>{manejarSubmit(e)}}>
                <div className="mb-3">
                    <label className="form-label">Nombre Producto</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="productoNombre"
                        value={value.productoNombre}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="productoDescripcion"
                        value={value.productoDescripcion}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="productoCantidad"
                        value={value.productoCantidad}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input 
                        type="checkbox"
                        className="form-check-input"
                        name="productoEstado"
                        value={value.productoEstado}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="productoImagen"
                        value={value.productoImagen}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="productoPrecio"
                        value={value.productoPrecio}
                        onChange={(e) => {actualizarInput(e)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="categoria"
                        value={value.categoria}
                        onChange={(e) => {actualizarInput(e)}}/>
                </div>
                <div className="d-grid">
                    <ButtonReg type="submit">
                        Guardar Producto
                    </ButtonReg>

                </div>
            </form>
        </div>
    </div>
    )
}