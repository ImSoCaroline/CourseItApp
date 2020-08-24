import React from "react";
import TitleComponent from './components/TitleComponent/TitleComponent';
import SubtitleComponent from './components/SubtitleComponent/SubtitleComponent';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';
// import logo from "./logo.svg";
// import ClassComponent from "./components/ClassComponent";

import "./App.css";

function App() {
  // function handleChange() {
  //   console.log("Cambio el input de App");
  // }
  const data = [
    {
      item: 'Producto 1'
    },
    {
      item: 'Producto 2'
    },
    {
      item: 'Producto 3'
    }
  ];

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <ClassComponent />
    //     <input onChange={handleChange} />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <TitleComponent title='Hola CourseIt' />
      <TitleComponent title='Hola CourseIt' />
      <SubtitleComponent subtitle='Curso de Frontend Avanzado' />
      <TitleComponent title='Hola CourseIt' />
      <TitleComponent title='Hola CourseIt' />
      <CarouselComponent data={data} />
    </>
  );
}

export default App;
