import { useState, useContext } from "react";
import emailjs from 'emailjs-com'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from "sweetalert2"
import { useForm } from "react-hook-form";
import './estilos.css';
import { TileLayer, MapContainer, useMapEvents, Marker} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Contenido,Info,Icono,TextContact } from "./Styles";

const SERVICE_ID = "service_xpdufx3"
const TEMPLATE_ID ="template_iix21o8"
const USER_ID ="user_W5lUQR8XQJ8UEsc29dTlY"


const Contacto = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [marcador, setMarcador] = useState([-16.4014, -71.5343])
    const AddMarker = () => {
        const map = useMapEvents({
            click: (e) => {
                console.log(e)
                const {lat, lng} = e.latlng
                setMarcador([lat, lng])
            }
        })
        return null
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text)
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado'
                })
            }, (error) => {
                console.log(error.text)
                Swal.fire({
                    icon: 'error',
                    title: 'Algo va mal',
                    text: error.text,
                })
            });
            e.target.reset()
    }
    return (
    <div className="row" >
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>  
        <div className="my-5 text-center">
                <h1 className="fw-bold" style={{color:'#ac5d5d'}}>
                    Contáctanos
                </h1>
            </div>
        <div className="Contacto justify-content-center align-items-center"  style={{width: '50%', float:'left'}}>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Correo'
                name='user_email'
                placeholder='Ingres tu correo'
                required
                icon='mail'
                iconPosition='left'/>
                
                <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Nombre'
                name='user_name'
                placeholder='Ingres tu nombre'
                required
                icon='user circle'
                iconPosition='left'/>
                
                <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Mensaje'
                name='user_message'
                placeholder='Ingresa un mensaje'
                required/>

                <Button type='submit'> Enviar</Button>

            </Form>
        </div>
   
        <div className=" justify-content-center align-items-center"  style={{width: '50%', float:'right'}}>
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
        <MapContainer   
                            className="mapa"
                            center={[-16.4014, -71.5343]}
                            zoom={17}
                            style={{height:"400px"}}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <AddMarker />
                            <Marker
                                position={marcador}
                            />
                        </MapContainer>
        </div>
    </div>
    )
}

export default Contacto;