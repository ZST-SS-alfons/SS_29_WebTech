import Header from "./components/Header.jsx";
import Student from "./components/Student.jsx"
import InfoBox from "./components/InfoBox.jsx"
import Course from "./components/CourseCard.jsx"
import Technology from "./components/Technology.jsx";
function App() {

  return (
    <>
      <Header />

      <main>

        <Student/>
        <InfoBox/>
        <Course/>
        
        <Technology/>
        <Technology/>
        <Technology/>

      </main>

    </>
  );
}

export default App;