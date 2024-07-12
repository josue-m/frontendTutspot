import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';
import LogoTut from '../../assets/Tut.png';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Construye el objeto de datos a enviar al servidor
    const datosUsuario = {
      
      correo: usuario,
      password: contrasena
    };

    try {
      // Realiza la solicitud al servidor para iniciar sesión
      const respuesta = await fetch('http://localhost:4200/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
        credentials: 'include',
      });

      console.log("Prueba", datosUsuario);

      if (respuesta.ok) {

        const datosRespuesta = await respuesta.json();
        console.log('Inicio de sesión exitoso', datosRespuesta);

        const userId = datosRespuesta.userId;

        if (datosRespuesta.tipoUsuario === 'alumno') {
          console.log("Redirigiendo a /alumno");
          navigate(`/alumno/${userId}`);

        } else if (datosRespuesta.tipoUsuario === 'tutor') {
          console.log("Redirigiendo a /tutor");
          navigate(`/tutor/${userId}`);

        }

      } else {
        const mensajeError = await respuesta.json();
        console.error('Error en el inicio de sesión:', mensajeError);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1>
              <a href="/">TutSpot</a>
            </h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>

              <li>
                <a href="/login">Iniciar Sesion</a>
              </li>

              <li>
                <a href="contact.html"> </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <Container fluid className="login-container">
        <Row>
          <Col md={10} className="login-form">
            <img src={LogoTut} alt="background" className="image" />
            <h2 className="login-title">Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  placeholder="Usuario"
                  className="input-field"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  className="input-field"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className="remember-me">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="submit" className="login-button" onClick={() => handleSubmit}>

                Iniciar Sesión
              </Button>
            </Form>
            <div className="create-account">
              ¿No tienes una cuenta?{' '}
              <Link to="/registro">Crear una cuenta</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
