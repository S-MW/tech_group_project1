import { Routes, Route } from "react-router-dom"

// Componentes import
import Home from "./components/Home"
import SimpleScenario from "./components/SimpleScenario"
import ComplicatedScenario from "./components/ComplicatedScenario"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SimpleScenario" element={<SimpleScenario />} />
        <Route path="/ComplicatedScenario" element={<ComplicatedScenario />} />
      </Routes>
    </>
  )
}