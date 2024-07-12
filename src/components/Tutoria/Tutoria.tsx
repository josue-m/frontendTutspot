import React, { useEffect, useState } from 'react';
import './Tutoria.css';
import { Link, useParams } from 'react-router-dom';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Materia } from '../../interfaces/Materia';

function Tutoria() {
    const { materiaId } = useParams<{ materiaId: string }>();
    const [materia, setMateria] = useState<Materia | null>(null);
    const { userId } = useParams<{ userId?: string }>();

    useEffect(() => {
        const fetchMateria = async () => {
            try {
                console.log("Este es mi ID", materiaId)
                const response = await apiConnection.get<Materia>(`/materia/get-materia-by-id/${materiaId}`);
                setMateria(response.data);
            } catch (error) {
                console.error('Error fetching materia:', error);
            }
        };

        fetchMateria();
    }, [materiaId]);


    if (!materia) {
        return <div>Loading...</div>;
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
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <div className="small mb-1"> </div>
                        <div className="input-group mt-2">
                            <h1 className="display-5 fw-bolder"> </h1>
                            <div className="fs-5 mb-5">
                                <br></br>
                                <h2 className="display-5 fw-bolder">{materia.tema}</h2>
                                <span>Lps. {materia.precio}</span>
                                <p className="lead">Fecha: {materia.fecha.toString()}</p>
                                {/* Add star rating here */}
                                <div className="rating">
                                    <span className="star" id="star1">&#9733;</span>
                                    <span className="star" id="star2">&#9733;</span>
                                    <span className="star" id="star3">&#9733;</span>
                                    <span className="star" id="star4">&#9733;</span>
                                    <span className="star" id="star5">&#9733;</span>
                                </div>
                                {/* End of star rating */}
                            </div>
                            <p className="lead">{materia.descripcion}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a className="btn-get-started animate__animated animate__fadeInUp" href={`/pago/${materia._id}`}>Reservar</a>
                    </div>
                </div>
                <br></br>
                {/* Start of Comentario card */}
                <div className="card mb-4">
                <div className="card-header">Comentario</div>
                <div className="card-body">
                <br />
                            <div className="input-group">
                                <label htmlFor="Comentario" className="input-fieldH">Ingrese un comentario</label>
                            <textarea className="input-field" name="Comentario" rows={5}></textarea>
                        </div>
                     </div>
                     <div className="input-group mt-3">
                    <button className="btn-get-started animate__animated animate__fadeInUp" type="button" >Enviar</button>
                  </div>
                </div>
                {/* End of Comentario card */}
            </div>
        </>
    );
}

export default Tutoria;
