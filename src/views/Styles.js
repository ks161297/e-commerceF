
import styled from "styled-components";
import { FaHandHoldingHeart, FaCartArrowDown, FaHeart ,FaSearch, FaTrashAlt} from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import {GrSave} from 'react-icons/gr'

/**Productos */

export const IconGiftF = styled(FaHandHoldingHeart)`
    color: #ac5d5d;
    background: #fff;
    height:35px;
    width: 35px;
    margin: 3px;
`

export const ProdTitle = styled.h1`
    color: #ac5d5d;
    text-align: center;
    padding 0 20px;
`
export const CartImagen = styled.img`
    width: 250px;
    height: 200px;
`

/**Detalle Producto */

export const DetProContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    z-index: 1;
    padding: 0 24px;
    width: 1900px;
    height: 700px;
    border-radius: 20px;
    
    
    
    
`

export const DetFIlas = styled.div`
justify-content: center;
align-items: center;

`
export const ImagenContainer =styled.div`
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    
` 
export const ImagenProd = styled.img`
    width: 640px;
    height: 480px;
    justify-content: center;
    align-items: center;
    margin-top:13%;
    border-radius: 20px;
`
export const ContainerBody = styled.div`
    margin-top:5%;
    text-align:center;
    align-items: center;
    justify-content: center;
`
export const CardBody = styled.div`
    align-items: center;
    justify-content: center;
    text-align:center;

`
export const DeTitulo = styled.h2`
    text-align:center;
    align-items: center;
    justify-content: center;
    color:#ac5d5d;
`

export const DeDescr = styled.h5`
    text-align:center;
    color:gray;

`
export const DetPrecio = styled.span`
     align-items: center;

`
export const DetColor= styled.div`
    text-align:center;
    align-items: center;
`
export const DetMaterial = styled.div`
    text-align:center;
    align-items: center;
`


export const BtnContainer = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    text-align:center;
`

export const DetButton = styled.button`
    border-radius: 20px;
    background: #AC5D5D;
    white-space: nowrap;
    margin: 5px;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border: none;
    cursor: pointer;
`



/**Boton carrito */

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:Transparent;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    background: #AC5D5D;




`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
    background: #AC5D5D;



`

export const ButtonHero = styled.a`
    border-radius: 50px;
    background: #AC5D5D;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #AC5D5D;
        color: #CDB9B9;
    }
`
/**Carrito de compras */

export const CarritoContainer = styled.div`

`

/*Lista */

export const IconSave = styled(GrSave)`
    color: #ac5d5d;
    background: #6+;
    height:35px;
    width: 35px;
    margin: 3px;
`

/**Página Productos */

export const Header5 = styled.h5`
    color: #ac5d5d;
`

export const BtnContenedor =styled.button`
    border-radius:5px;
    background:#ac5d5d;
    border-color:#ac5d5d;
`
export const IconProd = styled(FaSearch)`
    color: #FFF;
    background: #ac5d5d;
    height:25px;
    width: 25x;
    margin:2px;
`

/**Lista de Deseos */

export const TituloH1 = styled.h1`
    color: #ac5d5d;
`
export const btnCarrito = styled.button`
border-color:#fff;
`
export const IconCarrito = styled(FaCartArrowDown)`
color: #fff;
background: #ac5d5d;
height:35px;
width: 35x;
margin:2px;
`
export const IconCarrito2 = styled(FaCartArrowDown)`
color: #ac5d5d;
background: #fff;
height:35px;
width: 35x;
margin:2px;
`

export const btnEliminar = styled.button`
border-color:#fff;
`
export const IconLista = styled(FaHeart)`
    color: #fff;
    background: #ac5d5d;
    height:35px;
    width: 35x;
    margin:2px;
    
`
export const IconLista2 = styled(FaHeart)`
    color: #ac5d5d;
    background: #fff;
    height:35px;
    width: 35x;
    margin:2px;
    
`
export const IconEliminar = styled(FaTrashAlt)`
    color: #ac5d5d;
    background: #fff;
    height:35px;
    width: 35x;
    margin:2px;
    
`

export const Contenido = styled.div`
    padding:50px;
    margin-right: 100px;
    width:50%;
    display:flex;
    flex-direction:column;
    margin-top:5px;
`

export const Info = styled.div`
    position:relative;
    padding:20px 0;
    display:flex;
`

export const Icono = styled.div`
    min-width:60px;
    height:60px;
    background:#fff;
    color: #ac5d5d;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    font-size:22px
`
export const TextContact = styled.div`
    display:flex;
    margin-left:20px;
    font-size:16px;
    color:#000;
    flex-direction:column;
    font-weight:300;
  
`

