import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import PaginaProductos from './views/PaginaProductos'
import PaginaProducto from "./views/PaginaProducto";
// import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"
import PaginaCarrito from "./views/PaginaCarrito"
import PaginaListaD from "./views/PaginaListaD"
import PaginaCheckout from "./views/PaginaCheckout";
import ProtectedRoute from "./components/ProtectedRoute"
import Contacto2 from "./views/Contacto2"
import RegistrarCliente from "./views/RegistrarCliente"
import RegistrarCategoria from "./views/RegistrarCategoria"
import ListarProductosView from "./views/ListarProductosView"
import OpcionesAdministrador from "./views/OpcionesAdministrador";
import ListarCategoriasView from "./views/ListarCategoriaView";
import ListarClientesView from "./views/ListarClientesView";
import EditarCategoriaView from "./views/EditarCategoriaView";
import EditarClienteView from "./views/EditarClienteView"
import FiltroCliente from "./views/FiltroCliente"
import FiltroOrdenes from "./views/FiltrosOrdenes";


export default function Routes (){
    return(
        <div>
            <Route path='/' exact component={PaginaInicio}/>
            <Route path="/producto/:id" exact component={PaginaProducto}/>
            <Route path="/productos" exact component={PaginaProductos}/>
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
            <Route path="/carrito" exact component={PaginaCarrito} />
            <Route path="/lista" exact component={PaginaListaD} />
            <ProtectedRoute path="/checkout" exact component={PaginaCheckout}/>
            <Route path="/contactou" exact component={Contacto2}/>
            <Route path="/crear-cliente" exact component={RegistrarCliente} />
            <Route path="/crear-categoria" exact component ={RegistrarCategoria}/>
            <Route path="/crear-producto" exact component = {CrearProductoView}/>
            <Route path="/listar-prod" exact component = {ListarProductosView}/>
            <Route path="/opciones-admin" exact component ={OpcionesAdministrador}/>
            <Route path="/listar-cat" exact component={ListarCategoriasView}/>
            <Route path="/listar-cli" exact component={ListarClientesView}/>
            <Route path="/editar-cat/:id" exact component={EditarCategoriaView} />
            <Route path="/editar-cli/:id" exact component={EditarClienteView} />
            <Route path="/editar-prod/:id" exact component={EditarProductoView} />
            <Route path="/filtro-cli" exact component={FiltroCliente}/>
            <Route path="/filtro-ord" exact component={FiltroOrdenes}/>
           

        </div>  
    )
}


          
    