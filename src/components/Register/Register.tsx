import React, { useState } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoTut from '../../assets/Tut.png';
import './Register.css';
import { Usuarios } from '../../interfaces/Usuarios';
import { apiConnection } from '../../apiconnection/apiconnection';

export const Register: React.FC<{}> = () => {

  const [userData, setUserData] = useState<Usuarios>({
    _id: '',
    nombre: '',
    apellido: '',
    password: '',
    correo: '',
    rol: 'alumno',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const crearusuario = async (values: any) =>{
    try {        
      const responseuser = await apiConnection.post<Usuarios>('/users/create-user', values);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    crearusuario(userData);
    console.log('Datos del usuario:', userData);
    alert(JSON.stringify("Usuario creado exitosamente"));
  }

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
                <a href="/login">Iniciar Sesión</a>
              </li>
              <li>
                <a href="contact.html"> </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
<br></br>
      <Container fluid className="login-container">
        
          <Col md={0.5} className="image-container">

          </Col>
          <div className="login-form">
      
           <img src={LogoTut} alt="background" className="image" />
            <h2 className="login-title">Registro de Usuario</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  onChange={handleChange}
                  className="input-field"
                  required />
              </Form.Group>
              <Form.Group controlId="apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="apellido"
                  onChange={handleChange}
                  className="input-field"
                  required />
              </Form.Group>
              <Form.Group controlId="correo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="correo"
                  onChange={handleChange}
                  className="input-field"
                  required />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su constraseña"
                  name="password"
                  onChange={handleChange}
                  className="input-field"
                  required />
              </Form.Group>
              <Form.Group controlId="rol">
                <Form.Label>Rol</Form.Label>
                <Form.Control as="select" name="rol" className="input-field" onChange={handleChange}>
                  <option value="alumno">Alumno</option>
                  <option value="tutor">Tutor</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" className="login-button">
                Registrarse
              </Button>
            </Form>
            <div className="create-account">
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
            </div>
            </div>
      </Container>
    </>
  );
};

export default Register;
