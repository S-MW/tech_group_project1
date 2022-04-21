import { Routes, Route } from "react-router-dom"

// Componentes import
import Home from "./components/Home"
import StudentHome from "./components/studentComponents/StudentHome"
import SimpleScenarioLesson1 from "./components/studentComponents/simpleScenario/lesson1/SimpleScenarioLesson1"
import SimpleScenarioLesson2 from "./components/studentComponents/simpleScenario/lesson2/SimpleScenarioLesson2"
import ComplicatedScenarioLesson1 from "./components/studentComponents/ComplicatedScenario/lesson1/ComplicatedScenarioLesson1"
import ComplicatedScenarioLesson2 from "./components/studentComponents/ComplicatedScenario/lesson2/ComplicatedScenarioLesson2"



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path="/SimpleScenarioLesson1" element={<SimpleScenarioLesson1 />} />
        <Route path="/SimpleScenarioLesson2" element={<SimpleScenarioLesson2 />} />
        <Route path="/ComplicatedScenarioLesson1" element={<ComplicatedScenarioLesson1 />} />
        <Route path="/ComplicatedScenarioLesson2" element={<ComplicatedScenarioLesson2 />} />
      </Routes>
    </>
  )
}