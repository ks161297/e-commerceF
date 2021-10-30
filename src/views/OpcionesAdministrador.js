import { useRef } from "react";
import imgLogin from "../images/login.jpg"

export default function OpcionesAdministrador(){
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
        <div className="col-sm-2 col-md-8 d-flex justify-content-center ">
        <form>
            <h1 className= " text-align-center">Ingreso Administrador </h1>
            <a type="button" className=" btn-lg btnp" href="/listar-cat">Categorias</a>
            <a type="button" className=" btn-lg btnp" href="/listar-prod">Productos</a>
            <a type="button" className=" btn-lg btnp" href="/listar-cli" >Clientes</a>
            <a type="button" className=" btn-lg btnp" href="/filtro-ord">Ordenes</a>
        </form>
        </div>
    </div>
    )
}