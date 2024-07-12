import React from 'react';
import './PerfilAlumno.css';
import Alumno from '../../assets/Estudiante.png';
import { Link, useParams } from 'react-router-dom';

const PerfilAlumno: React.FC = () => {
  const {userId} = useParams<{userId?:string}>();
  return (
    <html lang="en">
    
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
           {/* Bootstrap core CSS */}
      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
      <style>
        {`.bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }`}
      </style>
      {/* Custom styles for this template */}
      <link href="dashboard.css" rel="stylesheet" />
    </head>
    <body>
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
                <Link to={`/alumno/${userId}`}>Tutorias Disponibles</Link>
                </li>
                <li>
                  <a href="/">Cerrar Sesion</a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>

      <div className="container-fluid">
        <div className="row">
          
          
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <br />
            <div className="card mb-4">
              <div className="card-header">Perfil</div>
              <div className="card-body">
                <div className="col-lg-7">
                  <img className="bd-placeholder-img rounded-square" width="140" height="140"  src={Alumno} alt="..." />
                </div>
                <br />
                <div className="input-group">
                <label htmlFor="nombres-apellidos" className="input-fieldH">Nombres y Apellidos</label>
                <input type="text" id="nombres-apellidos" className="input-field" name="nombres-apellidos" />
                </div>
                
                <div className="input-group">
                <label htmlFor="fecha-nacimiento" className="input-fieldH">Fecha de Nacimiento</label>
                <input type="date" id="fecha-nacimiento" className="input-field" name="fecha-nacimiento" />
                </div>
                
                <div className="input-group">
                <label htmlFor="correo"  className="input-fieldH">Correo Electrónico</label>
                <input type="email" id="correo" className="input-field" name="correo" />
                </div>
                
                <div className="input-group">
                <label htmlFor="direccion"className="input-fieldH">Dirección</label>
                <input type="text" id="direccion" className="input-field" name="direccion" />
                </div>
                
                <div className="input-group">
                <label htmlFor="id" className="input-fieldH">ID</label>
                <input type="text" id="id" className="input-field" name="id" />
                </div>

                <div className="input-group">
                <label htmlFor="nivel-estudios" className="input-fieldH">Nivel de Estudios</label>
                <select id="nivel-estudios" className="input-field" name="nivel-estudios">
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="universidad">Universidad</option>
                  <option value="posgrado">Posgrado</option>
                </select>
                </div>
                
                <label htmlFor="foto-perfil" className="input-fieldH">Foto de Perfil: </label>
                <input type="file" id="foto-perfil" name="foto-perfil" accept="image/*" />
                <div className="btn-get-started animate__animated animate__fadeInUp w-100">Guardar</div>
              </div>
            </div>
          </main>
          
        </div>
      </div>
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossOrigin="anonymous"></script>
      <script src="dashboard.js"></script>
    </body>
  </html>
);
};


export default PerfilAlumno;