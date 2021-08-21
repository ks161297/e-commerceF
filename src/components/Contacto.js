import React from 'react'
import {Contacto,Contenido,Info,Icono,ContactForm,InputBox,Label,Input,TextArea, Buttom,TitleContact, ContactPrincipal, TextContact} from './general'

export default function ContactoView() {
    return (
        <ContactPrincipal>
            <TitleContact>
                <h2 className="fw-bold" style={{color:'#fff'}}>Contáctenos</h2>
            </TitleContact>
            <Contacto>
                <Contenido>
                    <Info>
                        <Icono>
                            <i className="fas fa-map-marker-alt" />
                        </Icono>
                        <TextContact>
                            <h3>Dirección</h3>
                            <p>Av.Miraflores 3562</p>
                        </TextContact>
                    </Info>
                    <Info>
                        <Icono>
                            <i className="fas fa-envelope" />
                        </Icono>
                        <TextContact>
                            <h3>Correo</h3>
                            <p>handmadeM&A@hotmail.com</p>
                        </TextContact>
                    </Info>
                    <Info>
                        <Icono>
                            <i className="fas fa-phone" />
                        </Icono>
                        <TextContact>
                            <h3>Celular</h3>
                            <p>995654526</p>
                        </TextContact>
                    </Info>
                </Contenido>
                <ContactForm>
                    <form>
                        <InputBox>
                            <Label>Nombre y Apellido:</Label>
                            <Input />
                        </InputBox>
                        <InputBox>
                            <Label>Correo Electrónico:</Label>
                            <Input />
                        </InputBox>
                        <InputBox>
                            <Label>Asunto:</Label>
                            <TextArea/>
                        </InputBox>
                        <InputBox>
                            <Buttom>Enviar</Buttom>
                        </InputBox>
                    </form>
                </ContactForm>

            </Contacto>
        </ContactPrincipal>
    )
}
