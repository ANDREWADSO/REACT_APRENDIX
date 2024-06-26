import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import {NavBar} from './components/NavBar'; *****CHEQUEAR RUTA DEL NAVBAR****
import { CustomNavbar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register'; 
import 'bootstrap/dist/css/bootstrap.min.css';





const LoginForm = (props) => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Login">
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
};

const Home = () => (
  <div>
    <CustomNavbar />
    {/* <section id="home" style={{ padding: '100px 0', height: '100vh' }}> */}
      <Banner />
    {/* </section> */}
    {/* <section id="skills" style={{ padding: '100px 0', height: '100vh' }}> */}
      <Skills />
    {/* </section> */}
    {/* // <section id="proyecto" style={{ padding: '100px 0', height: '100vh' }}> */}
      <Projects />
    {/* </section> */}
    <Footer />
  </div>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={ <Home/> } />
      </Routes>
    </Router>
  );
}


export default App;
// {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
