import React, { useEffect, useState } from 'react';
import './Pago.css'; 
import { Link, useParams } from 'react-router-dom';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Materia } from '../../interfaces/Materia';

function Pago() {
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
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Shop Item - Start Bootstrap Template</title>
                {/* Favicon */}
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                {/* Bootstrap icons */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                {/* Core theme CSS (includes Bootstrap) */}
                <link href="css/styles.css" rel="stylesheet" />
            </head>
            <body>
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
                <br></br>
                {/* Product section */}
                <div className="container bg-light d-md-flex align-items-center">
            <div className="card box2 shadow-sm">
                <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
                    <span className="h5 fw-bold m-0">Metodo de Pago</span>
                    <div className="btn btn-primary bar"><span className="fas fa-bars"></span></div>
                </div>
                <ul className="nav nav-tabs mb-3 px-md-4 px-2">
                    <li className="nav-item">
                        <a className="nav-link px-2 active" aria-current="page" href=" ">Tarjeta Credito/Debito</a>
                    </li>
                   
                    <li className="nav-item ms-auto">
                        <a className="nav-link px-2" href=" ">+ More</a>
                    </li>
                </ul>
           
                <form action="">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-column px-md-5 px-4 mb-4">
                                <span>Numero de la Tarjeta</span>
                                <div className="inputWithIcon">
                                    <input className="imput-field" type="text"  />
                                    <span className="">
                                        <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                                <span>Fecha de expiracion</span>
                                <div className="inputWithIcon">
                                    <input type="text" className="imput-form" />
                                    <span className="fas fa-calendar-alt"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <span>CVV</span>
                                <div className="inputWithIcon">
                                    <input type="password" className="imput-form"  />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column px-md-5 px-4 mb-4">
                                <span>Nombre</span>
                                <div className="inputWithIcon">
                                    <input className="imput-form text-uppercase" type="text"  />
                                    <span className="far fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    <span className="fas fa-dollar-sign"></span>
                    <span>Total: </span>
                    <span>Lps. {materia.precio}</span>
                </div>
             
            </div>
                        <div className="col-12 px-md-5 px-4 mt-3">
                        <a className="btn-get-started animate__animated animate__fadeInUp" href={`/detalle/${materia._id}`}>Pagar</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
                {/* Related items section */}
                <section className="py-5 bg-light">
                    <div className="container px-4 px-lg-5 mt-5">
                        <h2 className="fw-bolder mb-4"> </h2>
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {/* Related products cards */}
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white"></p></div>
                </footer>
                {/* Bootstrap core JS */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                {/* Core theme JS */}
                <script src="js/scripts.js"></script>
            </body>
        </html>
    );
}

export default Pago;
