import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};
  const student = {
  name: "Szymon",
  surname: "Szostak",
  className: "4P",
  specialization: "technik programista"
};

  return (
    <div>

      <h1>{technology.name}</h1>

      <p>Kategoria:{technology.category}</p>
      
      <p>Liczba godzin:{technology.hours}</p>

      <p>uczeń: {student.name}</p>

      <p>klasa {student.className}</p>

      <p>
        Specjalizacja: {student.specialization}
      </p>

    </div>
  );
}

export default App;


