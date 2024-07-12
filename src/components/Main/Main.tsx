import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // Importa el archivo CSS
import Estudiante from '../../assets/Estudiante.png';
import Tutor from '../../assets/Tutor.png';
import Logo from '../../assets/Tutspot Logo.png';
import Estadisticas from '../../assets/Estadisticas.png';

const MainPage: React.FC<{ isLoggedIn: boolean; userType: string }> = ({ isLoggedIn, userType }) => {
  if (!isLoggedIn) {
    // Si el usuario no ha iniciado sesión, puedes redirigirlo a la página de inicio de sesión
    return <Link to="/login" />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eterna Bootstrap Template - Index</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">tut-spot@gmail.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>-</span>
              </i>
            </div>
          </div>
        </section>
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
        <section id="hero">
          <div className="hero-container">
            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              ></ol>
              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: "url(assets/slide-1.jpg)" }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        Bienvenido a <span>Tutspot</span>
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        ¡El lugar donde se unen el aprendizaje y la oportunidad!
                        Conviértete en un estudiante estrella recibiendo
                        tutorías virtuales personalizadas en una variedad de
                        materias, mientras que los tutores expertos tienen la
                        oportunidad de compartir su conocimiento y ganar dinero
                        desde la comodidad de su hogar.
                      </p>
                      <a
                        href="/registro"
                        className="btn-get-started animate__animated animate__fadeInUp"
                      >
                        Registrate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <main id="main">
          <section id="featured" className="featured">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="icon-box">
                    <i className="bi bi-card-checklist"></i>
                    <div className="col-lg-7">
                      <img
                        className="bd-placeholder-img rounded-circle"
                        width="140"
                        height="140"
                        src={Estudiante}
                        alt="..."
                      />
                    </div>
                    <h3>
                      <a href=" ">Estudiante</a>
                    </h3>
                    <p>
                      ¿Listo para llevar tu aprendizaje al siguiente nivel? En
                      TutSpot, te ofrecemos la oportunidad de recibir tutorías
                      virtuales de alta calidad, adaptadas a tus necesidades y
                      horarios, para asegurarte de alcanzar tus metas académicas
                      con éxito.
                    </p>
                    <br></br>
                    <div className="card-footer">
                      <a className="btn btn-primary btn-sm" href="/registro">
                        Registrate
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i className="bi bi-binoculars"></i>
                    <div className="col-lg-7">
                      <img
                        className="bd-placeholder-img rounded-rectangle"
                        width="140"
                        height="140"
                        src={Logo}
                        alt="..."
                      />
                    </div>
                    <h3>
                      <a href=" ">Tut-Spot</a>
                    </h3>
                    <p>
                      Con TutSpot, el aprendizaje se convierte en una aventura
                      emocionante y enriquecedora que transformará tu vida para
                      siempre.
                    </p>
                    <br></br>
                    <br></br>
                    <div className="card-footer">
                      <a className="btn btn-primary btn-sm" href="/registro">
                        Registrate
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i className="bi bi-binoculars"></i>
                    <div className="col-lg-7">
                      <img
                        className="bd-placeholder-img rounded-circle"
                        width="140"
                        height="140"
                        src={Tutor}
                        alt="..."
                      />
                    </div>
                    <h3>
                      <a href=" ">Tutor</a>
                    </h3>
                    <p>
                      Únete a nuestra comunidad de tutores expertos y comienza a
                      marcar la diferencia hoy mismo. ¡Inicia tu camino hacia el
                      éxito educativo y financiero con TutSpot!
                    </p>
                    <br></br>
                    <br></br>
                    <div className="card-footer">
                      <a className="btn btn-primary btn-sm" href="/registro">
                        Registrate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="container">
              <div className="section-title">
                <h2>Estadisticas</h2>
                <p>En Tutspot, hemos recopilado datos sobre las tutorías
                 más solicitadas por nuestros usuarios, destacándose las
                  de matemáticas, ciencias, idiomas y programación. Estas áreas 
                  abarcan la gran mayoría de nuestras solicitudes, reflejando la 
                  importancia de contar con apoyo especializado en estas materias
                   para asegurar un óptimo rendimiento académico.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <img
                    src={Estadisticas}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>
                    Tutorias mas populares
                  </h3>
                  <p className="fst-italic">
                    En este grafico se muestran las tutorias de mayor demanda en
                    nuestra plataforma.
                  </p>

                  <div className="skills-content">
                    <div className="progress">
                      <span className="skill">
                        HTML <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Fisica Elemental <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Algebra Lineal <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Ingles 1 <i className="val">55%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Contactanos</h4>
                  <p>tut-spot@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a
          href=" "
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </html>
  );
};

export default MainPage;
