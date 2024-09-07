import { Navigate, Route, Routes } from "react-router-dom";
import SetPorjectsType from "./types/set-projects-type";
import checkFirstLoad from "./utils/check-first-load";
import defaultProjects from "./defaults/projects";
import useLocalStorage from "use-local-storage";
import TutorialPage from "./pages/tutorial";
import ProjectData from "./types/project";
import HomePage from "./pages/home";
import EditPage from "./pages/edit";
import NavBar from "./comp/nav-bar";
import "./index.css";

export default function App() {
  const [projects, setProjects] = useLocalStorage<ProjectData[]>(
    "t-var-projects",
    defaultProjects
  );

  checkFirstLoad();

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
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
