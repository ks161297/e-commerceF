import im1 from '../images/svg1.svg'
import im2 from '../images/svg-4.svg'
import im3 from '../images/svg-2.svg'
import { ServicesContainer, ServicesH1,SparIcon, ServicesWrapper,ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './general'
import Conecta from './escribenos'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>¿Qué puedes encontrar aquí?
                <SparIcon/>
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={im1}/>
                    <ServicesH2 href='/productos'>Tienda de regalos</ServicesH2>
                    <ServicesP> El trabajo hecho con gusto y con amor, siempre es una creación original y única - RS.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={im2}/>
                    <ServicesH2 href='/nosotros'>Conócenos</ServicesH2>
                    <ServicesP> Lee un poco más sobre nuestra tienda y puedes encontrar algún tip extra.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={im3}/>
                    <ServicesH2 href='/contactou'>Contáctanos</ServicesH2>
                    <ServicesP> Si te gustaría algo más personalizado, escríbenos para consultar.</ServicesP>
                </ServicesCard>
             
            </ServicesWrapper>
            <Conecta/>
        </ServicesContainer>
    )
}

export default Services
