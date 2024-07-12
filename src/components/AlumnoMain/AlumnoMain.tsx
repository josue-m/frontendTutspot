import React, { useState, useEffect } from 'react';
import './AlumnoMain.css'; 
import { Materia } from '../../interfaces/Materia';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Link, useParams } from 'react-router-dom';

const AlumnoMain: React.FC = () => {
  const [tutorias, setTutorias] = useState<Materia[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Materia[]>([]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    const fetchTutorias = async () => {
      try {
        const response = await apiConnection.get<Materia[]>('/materia/get-all-materia');
        setTutorias(response.data);
      } catch (error) {
        console.error('Error fetching tutorias:', error);
      }
    };

    fetchTutorias();
  }, []);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const results = tutorias.filter(materia => materia.tema.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
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
                <Link to={`/perfilalumno/${userId}`}>Cuenta</Link>
              </li>
              <li>
                <a href="/">Cerrar Sesion</a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <br />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Ingrese el tema que busca" value={searchQuery} onChange={handleSearchInputChange} />
              <button className="btn-get-started animate__animated animate__fadeInUp" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
        
          {(searchResults.length > 0 ? searchResults : tutorias).map(materia => (
            
            <div className="col-md-10 mb-4" key={materia._id}>
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{materia.tema}</h2>
                  <p className="card-text">{materia.descripcion}</p>
                  <div className="small text-muted">LPS: {materia.precio}</div>
                  <Link className="btn-get-started animate__animated animate__fadeInUp" to={`/tutoria/${materia._id}`}>Ver más →</Link>
                  <br></br>
                </div>
              </div>
            </div>
            
          ))}
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default AlumnoMain;
