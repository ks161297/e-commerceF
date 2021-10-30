import { useRef } from "react";
import { ButtonReg } from "./general";
import imgLogin from "../images/login.jpg"

export default function FormCategoria({
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
                    <label className="form-label">Nombre Categoria</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="categoriaNombre"
                        value={value.categoriaNombre}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input 
                        type="checkbox"
                        className="form-check-input"
                        name="categoriaEstado"
                        value={value.categoriaEstado}
                        onChange={(e) => {actualizarInput(e)}} />
                </div>
                <div className="d-grid">
                    <ButtonReg type="submit">
                        Guardar Categoría
                    </ButtonReg>

                </div>
            </form>
        </div>
    </div>
    )
}