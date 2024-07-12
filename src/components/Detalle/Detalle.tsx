import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Materia } from '../../interfaces/Materia';

function Detalle() {
    const { materiaId } = useParams<{ materiaId: string }>();
    const [materia, setMateria] = useState<Materia | null>(null);
    const [error, setError] = useState<string | null>(null);
    const {userId} = useParams<{userId?:string}>();
  
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchMateria = async () => {
            try {
                setLoading(true);
                const response = await apiConnection.get<Materia>(`/materia/get-materia-by-id/${materiaId}`);
                setMateria(response.data);
            } catch (error) {
                console.error('Error fetching materia:', error);
                setError('Error fetching payment details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchMateria();


    }, [materiaId]);

    

    return (
        <div>
            {/* Navigation */}
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
            {/* Payment details section */}
            <br></br>
            <div className="container">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="card mb-4">
                    <div className="card box2 shadow-sm">
                        <div className="d-flex align-items-center">
                            <br />
                            <h1 className="text-center" style={{ color: '#E96B56' }}>Pago realizado exitosamente!</h1>
                        </div>
                        <form>
                            <div className="col-md-4">
                            <br></br>
                                <h4 className="card-title">Detalles de la Orden:</h4> <br></br>
                                {materia && (
                                    <>
                                        <h5 className="card-title">Nombre de la tutoria:</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{materia.tema}</h6>
                                        <h5 className="card-title">Fecha:</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{new Date(materia.fecha).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</h6>
                                        <h5 className="card-title">Descripcion de la tutoria:</h5>
                                        <p className="card-subtitle mb-2 text-muted">{materia.descripcion}</p>
                                        <p className="card-text">--------------------------------------------------------</p>
                                        <h5 className="card-text">Total: {materia.precio}</h5> <br></br>
                                    </>
                                )}
                                <h5 className="card-text">Link de Reunion:</h5>
                                <a href={materia?.link} className="card-subtitle mb-2">{materia?.link}</a>
                                 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalle;
