import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import PaginaProductos from './views/PaginaProductos'
import PaginaProducto from "./views/PaginaProducto";
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"
import PaginaCarrito from "./views/PaginaCarrito"
import PaginaListaD from "./views/PaginaListaD"
import PaginaCheckout from "./views/PaginaCheckout";
import ProtectedRoute from "./components/ProtectedRoute"
import RegistrarUsuario from "./views/RegistrarUsuario";
import Contacto2 from "./views/Contacto2"





export default function Routes (){
    return(
        <div>
            <Route path='/' exact component={PaginaInicio}/>
            <Route path="/detalle/:id" exact component={PaginaProducto}/>
            <Route path="/productos" exact component={PaginaProductos}/>
            <Route path="/listaProductos" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
            <Route path="/carrito" exact component={PaginaCarrito} />
            <Route path="/lista" exact component={PaginaListaD} />
            <ProtectedRoute path="/checkout" exact component={PaginaCheckout}/>
            <Route path="/registro" exact component={RegistrarUsuario}></Route>
            <Route path="/contactou" exact component={Contacto2}/>
        </div>
    )
}


          
    