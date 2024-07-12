import React, { useEffect, useState } from 'react';
import './Calendario.css';
import { apiConnection } from '../../apiconnection/apiconnection';
import { Materia } from '../../interfaces/Materia';
import { Link, useParams } from 'react-router-dom';

const Calendario: React.FC = () => {
  const [month, setMonth] = useState<string>('March');
  const [year, setYear] = useState<number>(2024);
  const [tutorias, setTutorias] = useState<Materia[]>([]);
  const [selectedMateria, setSelectedMateria] = useState<Materia | null>(null);
  const {userId} = useParams<{userId?:string}>();

  const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const years: number[] = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value));
  };

  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartingDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = (): JSX.Element[] => {
    const totalDays = daysInMonth(months.indexOf(month), year);
    const startingDay = getStartingDayOfMonth(months.indexOf(month), year);
    const days: JSX.Element[] = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<li key={`empty-${i}`} className="empty-day"></li>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const eventsOnDate = tutorias.filter(materia => {
        const materiaDate = new Date(materia.fecha);
        return materiaDate.getMonth() === months.indexOf(month) && materiaDate.getFullYear() === year && materiaDate.getDate() === i;
      });
      const eventIndicators = eventsOnDate.map((materia, index) => (
        <div key={index} className="event-indicator" onClick={() => setSelectedMateria(materia)}>{materia.tema}</div>
      ));
      days.push(
        <li key={i}>
          <div className="date">{i}</div>
          {eventIndicators}
        </li>
      );
    }

    return days;
  };

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

      <div className="container py-5">
        <div className="d-flex justify-content-center mb-3">
          <select className="form-select me-2" value={month} onChange={handleMonthChange}>
            {months.map((m, index) => (
              <option key={index} value={m}>{m}</option>
            ))}
          </select>
          <select className="form-select" value={year} onChange={handleYearChange}>
            {years.map((y, index) => (
              <option key={index} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="calendar shadow bg-white p-5">
              <div className="d-flex align-items-center">
                <i className="fa fa-calendar fa-3x mr-3"></i>
                <h2 className="month font-weight-bold mb-0 text-uppercase">{month} {year}</h2>
              </div>
              <p className="font-italic text-muted mb-5"></p>
              <ol className="day-names list-unstyled">
                <li className="font-weight-bold text-uppercase">Dom</li>
                <li className="font-weight-bold text-uppercase">Lun</li>
                <li className="font-weight-bold text-uppercase">Mar</li>
                <li className="font-weight-bold text-uppercase">Mie</li>
                <li className="font-weight-bold text-uppercase">Jue</li>
                <li className="font-weight-bold text-uppercase">Vie</li>
                <li className="font-weight-bold text-uppercase">Sab</li>
              </ol>
              <ol className="days list-unstyled">
                {generateCalendarDays()}
              </ol>
            </div>
          </div>
          <div className="col-md-4">
            {selectedMateria && (
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{selectedMateria.tema}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{new Date(selectedMateria.fecha).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</h6>
                  <p className="card-text">{selectedMateria.descripcion}</p>
                  <h5 className="card-text">Link de Reunion:</h5>
                  <a href={selectedMateria?.link} className="card-subtitle mb-2">{selectedMateria?.link}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
