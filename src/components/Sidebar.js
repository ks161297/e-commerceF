import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './general'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about" onClick={toggle}>Tienda</SidebarLink>
                   <SidebarLink to="about">Nosotros</SidebarLink>
                   <SidebarLink to="about">Contáctanos</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="registrarse">Regístrate</SidebarRoute>
                   <SidebarRoute to="ingresar">Iniciar Sesión</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar;
