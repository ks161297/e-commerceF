import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine,MenuIconS,Heading, Subtitle,BtnWrap,Column2,ImgWrap,Img, Button } from './general'
import p1 from '../images/svg-3.svg'


const InfoSection = () => {
    return (
        <>
          <InfoContainer>
              <InfoWrapper>
                  <InfoRow>
                      <Column1>
                      <TextWrapper>
                          <TopLine>Handmade
                            <MenuIconS />
                          </TopLine>
                          <Heading>¿Estás buscando algo especial?</Heading>
                          <Subtitle>Aqui vas a encontrar los mejores regalos para esa persona especial, ¿Te interesa? </Subtitle>
                          <BtnWrap>
                              <Button to='/productos'>¡Comencemos con está experiencia!</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={p1}/>
                        </ImgWrap>  
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
        </>
    )
}

export default InfoSection