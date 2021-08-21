import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GPContenedor, GProductos, GPWrapper,GPHeader,GPPrice,BtnRedirect,GPBody,GPFooter,GPLink,GPStock} from "./general"

export default function GrupoProductos({productos}) {
    console.log(productos)
    return (
        <GPContenedor>
            <GPWrapper>

                {productos.map((prod, i) => (
                    <GProductos key={i}>
                        <GPLink className="card mb-4" to={`/detalle/${prod.prod_id}`}>
                            <GPHeader className="card-header">
                                {prod.prod_nombre}
                            </GPHeader>
                            <GPBody className="card-body">
                                <img
                                    src={prod.prod_imagen}
                                    className="card-img-top"
                                    alt={prod.prod_nombre}/>
                                
                                <GPPrice>S/. {prod.prod_precio}</GPPrice>
                                <GPStock>Existen: {prod.prod_stock}</GPStock>
                            </GPBody>
                            <GPFooter className="card-footer text-muted">
                                <BtnRedirect to={`/detalle/${prod.prod_id}`} >¡Mira lo que contiene!</BtnRedirect>
                            </GPFooter>
                        </GPLink>
                    </GProductos>
                ))}
            </GPWrapper>
        </GPContenedor>
     
    )}