import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import MainPage from './components/Main/Main';
import AlumnoMain from './components/AlumnoMain/AlumnoMain';
import TutorMain from './components/TutorMain/TutorMain';
import PerfilTutor from './components/PerfilTutor/PerfilTutor';
import Tutoria from './components/Tutoria/Tutoria';
import PerfilAlumno from './components/PerfilAlumno/PerfilAlumno';
import Pago from './components/Pago/Pago';
import Calendario from './components/Calendario/Calendario';
import Detalle from './components/Detalle/Detalle';

const App: React.FC = () => {
  const isLoggedIn = true;
  const userType = 'alumno';
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn } userType={userType} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/alumno/:userId" element={<AlumnoMain />} />
        <Route path="/tutor/:userId" element={<TutorMain />} />
        <Route path="/perfiltutor/:userId" element={<PerfilTutor />} />
        <Route path="/perfilalumno/:userId" element={<PerfilAlumno />} />
        <Route path="/tutoria/:materiaId" element={<Tutoria />} />
        <Route path="/pago/:materiaId" element={<Pago />} />
        <Route path='/calendario/:userId' element={<Calendario />} />
        <Route path="/detalle/:materiaId" element={<Detalle />} />    

      </Routes>
    </Router>
  );
};

export default App;