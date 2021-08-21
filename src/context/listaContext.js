import { useState, createContext, useEffect } from "react";

export const ListaContext = createContext()

const ListaContextProvider = (props) => {

    const [lista, setLista] = useState([])

    const anadirALista = (producto) => {
        for(let i = 0; i < lista.length; i++){
            if(lista[i].prod_id === producto.prod_id){
                const productoExiste = {
                    ...lista[i],
                    cantidad: lista[i].cantidad + 1
                }
                let listaTmp = [...lista]
                listaTmp.splice(i, 1) 
                listaTmp.push(productoExiste) 
                setLista(listaTmp)
                return 
            }
        }
        setLista([...lista, {...producto, cantidad:1}])
    }

    const eliminarDLista = (producto) => {
        const act = [...lista];
        act.splice(producto,1)
        return setLista(act)
    }
        
    

    useEffect(() => {
        const listaStorage = JSON.parse(localStorage.getItem('lista'))
        if(listaStorage){
            setLista(listaStorage)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista))
    },[lista])


    return (
        <ListaContext.Provider value={{lista, anadirALista, eliminarDLista}}>
            {props.children}
        </ListaContext.Provider>
    )
}

export default ListaContextProvider