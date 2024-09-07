import { Navigate, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import ProjectData from "./types/project";
import NavBar from "./comp/nav-bar";
import HomePage from "./pages/home";
import EditPage from "./pages/edit";
import "./index.css";
import SetPorjectsType from "./types/set-projects-type";
import defaultProjects from "./defaults/projects";

export default function App() {
  const [projects, setProjects] = useLocalStorage<ProjectData[]>(
    "t-var-projects",
    defaultProjects
  );

  return (
    <>
      <NavBar projects={projects} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                projects={projects}
                setProjects={setProjects as SetPorjectsType}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditPage
                projects={projects}
                setProjects={setProjects as SetPorjectsType}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
