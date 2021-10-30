import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './general'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll"
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>SOBRE NOSOTROS</FooterLinkTitle>
                                <FooterLink to="/nosotros">Nosotros</FooterLink>
                                <FooterLink to="/singin">Preguntas Frecuentes</FooterLink>
                                <FooterLink to="/singin">Política de Envíos</FooterLink>
                                <FooterLink to="/singin">Autores</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Pruebas</FooterLinkTitle>
                                <FooterLink href="/opciones-admin">Administrador</FooterLink>   

                                
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>SERVICIO AL CLIENTE</FooterLinkTitle>
                                <FooterLink to="/singin">Cambios</FooterLink>
                                <FooterLink to="/singin">Política de Venta</FooterLink> 
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>ENCUÉNTRANOS EN</FooterLinkTitle>
                                <FooterLink href="https://www.facebook.com/kim161297/">
                                    <FaFacebook/> Handmade-M&A
                                </FooterLink>
                                <FooterLink href="https://www.instagram.com/kim.silva.16/?hl=es">
                                    <FaInstagram/> Handmade-M&A
                                </FooterLink>
                                <FooterLink href="https://www.facebook.com/kim161297/">
                                    <FaTwitter/> Handmade-M&A
                                </FooterLink>
                                <FooterLink href="https://www.facebook.com/kim161297/">
                                    <FaYoutube/> Handmade-M&A    
                                </FooterLink>
                        </FooterLinksItems>
                       
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Handmade by Aylin & Marigrace
                        </SocialLogo>
                        <WebsiteRights>HM © {new Date().getFullYear()} Todos los derechos reservados</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
