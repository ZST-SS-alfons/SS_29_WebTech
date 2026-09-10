import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const student = {
  name: "Szymon",
  surname: "Szostak",
  className: "4P",
  specialization: "technik programista"
};

  return (
    <div>



      <p>uczeń: {student.name}</p>

      <p>klasa {student.className}</p>

      <p>
        Specjalizacja: {student.specialization}
      </p>

    </div>
  );
}

export default App;


