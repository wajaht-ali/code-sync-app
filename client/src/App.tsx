import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:editorId" element={<EditorPage />} />
      </Routes>
    </>
  )
}

export default App
