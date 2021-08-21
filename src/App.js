import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';
import {AuthContextProvider} from "./context/authContext"
import CarritoContextProvider from './context/carritoContext';
import ListaContextProvider from './context/listaContext';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CarritoContextProvider>
          <ListaContextProvider>
            <Switch>
              <Routes/>
            </Switch>
          </ListaContextProvider>
        </CarritoContextProvider>
      </AuthContextProvider>
    </Router>
  )
}


export default App

