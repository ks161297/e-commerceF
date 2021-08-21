import { useContext} from 'react'
import imgLogin from "../images/login.jpg"
import { AuthContext } from '../context/authContext'
import { Form, Button} from 'react-bootstrap'

export default function RegistrarUsuario() {
    const { signIn } = useContext(AuthContext)


    return (
        <div className="row" style={{height:'calc(100vh - 60px)'}}>
            <div className="col-sm-10 col-md-4" style={{ height:'100%',overflow:'hidden'}}>
                <img 
                    src={imgLogin} 
                    style={{
                        position: 'absolute',
                        maxHeight:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen login"
                />
            </div>
            <div className="col-sm-2 col-md-8 d-flex justify-content-center align-items-center">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Eléctrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
                <Form.Text className="text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
  
              <Button variant="primary" type="submit"> Ingresar </Button>
            </Form>
            </div>
        </div>
    )
}
