import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path=":id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
