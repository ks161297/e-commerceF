import { useRef } from "react";
import { ButtonReg } from "./general";
import imgLogin from "../images/login.jpg"

export default function FormCliente({
    value,
    actualizarInput,
    manejarSubmit
}) {

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
                    <label className="form-label">Nombre Cliente</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="clienteNombre"
                        value={value.clienteNombre}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de documento</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="clienteTipoDoc"
                        value={value.clienteTipoDoc}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Número de documento</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="clienteNroDoc"
                        value={value.clienteNroDoc}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="clienteDireccion"
                        value={value.clienteDireccion}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Cliente</label>
                    <input 
                        type="number"
                        className="form-control"
                        name="clienteTipo"
                        value={value.clienteTipo}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input 
                        type="checkbox"
                        className="form-check-input"
                        name="clienteEstado"
                        value={value.clienteEstado}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="clienteCorreo"
                        value={value.clienteCorreo}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="password"
                        value={value.password}
                        onChange={(e) => {actualizarInput(e)}}/>
                </div>
                <div className="d-grid">
                    <ButtonReg type="submit">
                        Guardar Cliente
                    </ButtonReg>

                </div>
            </form>
        </div>
    </div>
    )
}