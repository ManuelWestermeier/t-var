import { Navigate, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import ProjectData from "./types/project";
import NavBar from "./comp/nav-bar";
import HomePage from "./pages/home";
import EditPage from "./pages/edit";
import "./index.css";

export default function App() {
  const [projects, setPorjects] = useLocalStorage<ProjectData[]>(
    "t-var-projects",
    []
  );

  return (
    <>
      <NavBar projects={projects} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage projects={projects} setProjects={setPorjects} />}
          />
          <Route
            path="/edit/:id"
            element={<EditPage projects={projects} setProjects={setPorjects} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
