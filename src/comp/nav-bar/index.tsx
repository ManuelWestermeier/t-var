import ProjectData from "../../types/project";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar({ projects }: { projects: ProjectData[] }) {
  return (
    <nav className="flex g-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tutorial">Tutorial</NavLink>
      <div className="projects flex g-10">
        {projects.map((project: ProjectData, index: number) => {
          return (
            <NavLink title={project.name} to={`/edit/${index}`} key={index}>
              {project.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
