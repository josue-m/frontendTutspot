import React, { useState, useEffect } from 'react';
import './TutorMain.css';
import { Materia } from '../../interfaces/Materia';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Link, useParams } from 'react-router-dom';

export const TutorMain: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const [materiaData, setMateriaData] = useState<Materia>({
    _id: '',
    tema: '',
    fecha: new Date(),
    descripcion: '',
    precio: '',
    link: '',
    foto: '',
    tutorId: userId,
  });
  const [tutorias, setTutorias] = useState<Materia[]>([]);

  useEffect(() => {
    const fetchTutorias = async () => {
      try {
        
        const response = await apiConnection.get<Materia[]>('/materia/get-all-materia/');
        setTutorias(response.data);
      } catch (error) {
        console.error('Error fetching tutorias:', error);
      }
    };

    fetchTutorias();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMateriaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const crearmateria = async () => {
    try {
      const responsemateria = await apiConnection.post<Materia>('/materia/create-materia', materiaData);
      console.log('Response:', responsemateria);
      alert("Tutoria creada exitosamente");
      // Add the created tutoria to the list of tutorias
      setTutorias((prevTutorias) => [...prevTutorias, responsemateria.data]);
    } catch (error) {
      console.log(error);
      alert("Error al crear la tutoría");
    }
  }

  const handleButtonClick = () => {
    crearmateria();
    console.log('Datos de la tutoria:', materiaData);
  }

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
                  <Link to={`/tutor/${userId}`}>Crear Tutoria</Link>
                </li>
                <li>
                  <Link to={`/perfiltutor/${userId}`}>Cuenta</Link>
                </li>
                <li>
                  <Link to={`/calendario/${userId}`}>Calendario</Link>
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
              <br></br>
              <div className="card mb-4">
                <div className="card-header">Crear Tutoria</div>
                <div className="card-body">
                  <div className="input-group">
                    <label htmlFor="tema" className="input-fieldH">Tema</label>
                    <input 
                      type="text" 
                      placeholder="Ingrese el tema de la tutoría..." 
                      name="tema" 
                      onChange={handleChange} 
                      className="input-field" 
                      aria-label="Ingrese el tema..." 
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label htmlFor="fecha" className="input-fieldH">Fecha</label>
                    <input 
                      name="fecha" 
                      className="input-field" 
                      type="datetime-local" 
                      aria-label="Ingrese la fecha de la tutoría..." 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label htmlFor="descripcion" className="input-fieldH">Descripción</label>
                    <input 
                      name="descripcion" 
                      className="input-field" 
                      placeholder="Ingrese una descripción..." 
                      aria-label="Ingrese una descripción..." 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label htmlFor="precio" className="input-fieldH">Precio</label>
                    <input 
                      name="precio" 
                      className="input-field" 
                      type="text" 
                      placeholder="Ingrese el precio..." 
                      aria-label="Ingrese el precio..." 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label htmlFor="link" className="input-fieldH">Link de reunion</label>
                    <input 
                      name="link" 
                      className="input-field" 
                      type="text" 
                      placeholder="Ingrese el link de la reunion..." 
                      aria-label="Ingrese el link de la reunion..." 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label htmlFor="foto" className="input-fieldH">Logo Tutoría</label> 
                   
                    <input 
                      type="file" 
                      name="foto" 
                      className="input-field"
                      accept="image/*" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="input-group mt-3">
                    <button className="btn-get-started animate__animated animate__fadeInUp" type="button" onClick={handleButtonClick}>Crear</button>
                  </div>
                </div>
              </div>

              {tutorias.length > 0 && (
                <div className="card mb-4">
                  <div className="card-header">Tutorias</div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Tema</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tutorias.map((tutoria, index) => (
                          <tr key={index}>
                            <td>{tutoria.tema}</td>
                            <td>{tutoria.fecha.toString()}</td>
                            <td>{tutoria.descripcion}</td>
                            <td>{tutoria.precio}</td>
                            <td>{tutoria.link}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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

export default TutorMain;
