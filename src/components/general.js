import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { FaBars, FaHeart, FaUser, FaUserPlus } from 'react-icons/fa'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { FaSplotch } from 'react-icons/fa'
import {HiSparkles} from 'react-icons/hi'
import { HiGift } from 'react-icons/hi'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import FavoriteIcon from '@material-ui/icons/Favorite';

/*Navbar - Elementos*/

export const Nav = styled.nav`
    background: ${({ scrolNav }) => (scrolNav ? '#AC5D5D' : 'transparent')};
    height: 80px;
    margint-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    background: #AC5D5D;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100;
`

export const NavLogo = styled(LinkR)`
    background: #AC5D5D;
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;
    &:hover {
        color: #CDB9B9;
        transition: 0.2s ease-in-out;
    }
`
export const Navimg = styled.img`
    color: #fff;
    background: #AC5D5D;
`
export const MenuIcon = styled(FaBars)`
    color: #fff;
    background: #AC5D5D;
    margin-top: -30px;
`
export const MobileIcon = styled.div`
    display: none;
    background: #AC5D5D;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        background: #AC5D5D;
        color: #FFF;
    }
`
export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    background: #AC5D5D;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    background: #AC5D5D;
`
export const NavLinks = styled(LinkR)`
    color: #fff;
    background: #AC5D5D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin:9px;
    height: 100%;
    cursor: pointer;
    &.active {
        border-botton: 3px solid #01bf71
    }
    &:hover {
        color: #CDB9B9;
        transition: 0.2s ease-in-out;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    background: #AC5D5D;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #AC5D5D;
    white-space: nowrap;
    margin: 0.5px;
    padding: 5px 10px;
    color: #AC5D5D;
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoaration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #AC5D5D;
    }
`
export const NavIngr = styled(FaUser)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`
export const NavRegi = styled(FaUserPlus)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`
export const Navlist = styled(FavoriteIcon)`
    color: #fff;
    background: #AC5D5D;
    height:20px;
    width: 20px;
`
export const Navcar = styled(ShoppingCartIcon)`
    color: #fff;
    background: #AC5D5D;
    height:20px;
    width: 20px;
`
export const GoogleIcon = styled(FcGoogle)`
    color: #fff;
    background: #fff;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    align-items: center;
    justify-content:center;
`
export const FacebookIcon = styled(SiFacebook)`
    background: #3b5998 ;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    align-items: center;
    justify-content:center;
`
export const FormButton1 = styled.button`
        background: #fff;
        padding: 16px 12PX;
        border: none;
        border-radius: 20px;
        font-size: 20px;
        cursor: pointer;
        border-style: solid;
        border-color: #fff;
        align-items: center;
        justify-content:center;
`
export const FormButton2 = styled.button`
        background: #fff;
        padding: 16px 12PX;
        border: none;
        border-radius: 20px;
        color: #3b5998 ;
        font-size: 20px;
        cursor: pointer;
        border-style: solid;
        border-color: #fff;
        align-items: center;
        justify-content:center;
`
export const ButtonSign = styled(LinkR)`
border-radius: 5px;
background: #AC5D5D;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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

export const ButtonComprar = styled(LinkR)`
border-radius: 5px;
background: #AC5D5D;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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
export const ButtonDetalle = styled(LinkR)`
border-radius: 5px;
background: #AC5D5D;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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
export const ButtonLista = styled(LinkR)`
border-radius: 5px;
background: #AC5D5D;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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

/*Sidebar - Elementos*/

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9900;
    width: 100%;
    height: 100%;
    background: #AC5D5D;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    background: #AC5D5D;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: #AC5D5D;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #000;
    background: #AC5D5D;

`

export const SidebarMenu = styled.ul`
    display: grid;
    background: #AC5D5D;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 60px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);

    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    background: #AC5D5D;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transtion: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #E6BCCB;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    background: #AC5D5D;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    margin: 2px;
    background: #fff;
    align-items: center;
    white-space: nowrap;
    padding: 16px 64px;
    color: #AC5D5D;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #C89696;
        color: #AC5D5D;

    }
`

/*Hero - Elements*/


export const HeroContainer =styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        botton:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%),
        rgba(0,0,0,0.6)100%);
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const Herobg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:Transparent;


`

export const HeroH1 = styled.h1`
    background-color:Transparent;
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    background-color:Transparent;

    c
`

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

export const ButtonHero = styled(LinkR)`
    border-radius: 50px;
    background: #AC5D5D;
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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

/* Información - Elementos */

export const InfoContainer = styled.div`
    color:#fff;
    background: #f9f9f9;
    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    background: #fff;
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    color:#fff
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col1 col1'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #AC5D5D;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-botto: 16px;
`

export const MenuIconS = styled(FaSplotch)`
    color: #AC5D5D;
    background: #fff;
    margin: 5px;
    margin-top: -2px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #CDB9B9;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const Subtitle = styled.p`
    color:#fff;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
    text-align:center;
    align-items: cen
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;


`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const Button = styled(LinkR)`
    border-radius: 50px;
    background: #AC5D5D;
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #CDB9B9;
    }
`

/*Productos Inicio - Elementos */


export const ProductsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #AC5D5D;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ProductsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProductsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const ProductsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ProductsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px:

    @media screen and (max-width: 480px){
        font-size 2rem
    }
`

export const StarIcon = styled(HiGift)`
    color: #fff;
    background: #AC5D5D;
    margin-top: -4px;
`

export const ProductsH2 = styled(LinkR)`
color: #000;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
text-align: center;
font-weight: bold;
text-decoration:none;
&:hover {
    color: #CDB9B9;
    transition: 0.2s ease-in-out;
}


`

export const ProductsP = styled(LinkR)`
color: #000;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
text-align: center;
text-decoration:none;
&:hover {
    color: #CDB9B9;
    transition: 0.2s ease-in-out;
}

`

/*Servicios Inicio - Elementos */

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #AC5D5D;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #AC5D5D;
    margin-bottom: 64px:

    @media screen and (max-width: 480px){
        font-size 2rem
    }
`

export const SparIcon = styled(HiSparkles)`
    color: #AC5D5D;
    background: #fff;
    margin-top: -4px;
`

export const ServicesH2 = styled(LinkR)`
color: #fff;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
text-align: center;
font-weight: bold;
text-decoration:none;
&:hover {
    color: #CDB9B9;
    transition: 0.2s ease-in-out;
}



`

export const ServicesP = styled(LinkR)`
color: #fff;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
text-align: justify;
text-decoration:none;
&:hover {
    color: #CDB9B9;
    transition: 0.2s ease-in-out;
}
`

/*Footer - Elementos */
export const FooterContainer = styled.footer`
    background-color: #AC5D5D;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.2rem;
    font-size: 14px;

    &:hover {
        color: #CDB9B6;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #CDB9B6;
        transition: 0.3s ease-out;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;

    &:hover {
        color: #CDB9B6;
        transition: 0.3s ease-out;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    &:hover {
        color: #CDB9B6;
        transition: 0.3s ease-out;
    }

`

/*Inicio de sesión - Elementos */


export const FormButton = styled.button`
        background: #fff;
        padding: 16px 0;
        border: none;
        border-radius: 20px;
        color: #AC5D5D;
        font-size: 20px;
        cursor: pointer;
        border-style: solid;
        border-color: #CDB9B9;
`



/*Grupo Productos - Elementos */

export const GPContenedor = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 768px){
        height: 100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const GPWrapper = styled.div`

max-width: 1000px;
margin: 0 auto;
display: grid;

grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 20px;
padding: 0 20px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 20 0px;
}
`


export const GProductos = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const GPHeader = styled.div`

justify-content: center;
align-items: center;
text-align: center;
color:#CDB9B9;
background: #fff;
font-weight: bold;

`

export const GPLink = styled(LinkR)`

    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;
    &:hover {
        color: #CDB9B9;
        transition: 0.2s ease-in-out;
    }

`
export const GPBody = styled.div`
align-items: center;
`
export const GPPrice = styled.h4`
align-items: center;
text-align: center;
justify-content: center;
color: #CDB9B9;
`
export const GPStock = styled.h6`
align-items: center;
text-align: center;
justify-content: center;
color: #CDB9B9;
`

export const BtnRedirect = styled(LinkR)`
border-radius: 50px;
background: #AC5D5D;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #CDB9B9;
}

`

export const GPFooter = styled.div`
    background: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
`
// CONTACTO

export const ContactPrincipal = styled.div`
    position:relative;
    padding:50px 100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#C89696;
`
export const TitleContact = styled.div`
    max-width:800px;
    text-align:center;
`
export const Contacto = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
export const Contenido = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
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
    color:#fff;
    flex-direction:column;
    font-weight:300;
  
`

export const ContactForm = styled.div`
    width:40%;
    padding:40px;
    background:#fff;

`
export const InputBox = styled.div`
    position:relative;
    width:100%;
    margin-top:10px;
`
export const Label = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #BF7C7C;
`
export const Input = styled.input`
    padding: 10px 10px;
    width:100%;
    margin-bottom: 8px;
    border: none;
    border-radius: 4px;
    color: #AC5D5D;
    border-style: solid;
    border-color: #CDB9B9;

`
export const TextArea = styled.textarea`
    padding: 10px 10px;
    width:100%;
    margin-bottom: 8px;
    border: none;
    border-radius: 4px;
    color: #AC5D5D;
    border-style: solid;
    border-color: #CDB9B9;

`
export const Buttom = styled.button`
    background: #AC5D5D;
    padding: 7px 40px;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border-style: solid;
    border-color: #CDB9B9;
`

export const CartImagen = styled.img`
    width: 100px;
    height: 100px;
`

export const ButtonReg = styled.button`
background: #AC5D5D;
padding: 7px 40px;
border: none;
border-radius: 10px;
color: #fff;
font-size: 20px;
cursor: pointer;
border-style: solid;
border-color: #CDB9B9;
`
