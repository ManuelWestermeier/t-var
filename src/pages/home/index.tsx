import { Link, useNavigate } from "react-router-dom";
import ProjectData from "../../types/project";
import ProjectConsumerProps from "../../types/project-consumer-props";

export default function HomePage({
  projects,
  setProjects,
}: ProjectConsumerProps) {
  const navigate = useNavigate();

  return (
    <>
      <h3>Projects</h3>
      <h4>Create</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.target as HTMLFormElement);
          setProjects((oldProjects: ProjectData[]) => [
            {
              name: fd.get("name") as string,
              data: "",
            },
            ...oldProjects,
          ]);
          navigate("/edit/0");
        }}
      >
        <input
          type="text"
          placeholder="project name..."
          name="name"
          title="project name"
        />
        <button type="submit">Create</button>
      </form>
      <h4>Projects</h4>
      <ul>
        {projects.map((project: ProjectData, index: number) => {
          return (
            <li className="flex">
              <Link to={`/edit/${index}`}>{project.name}</Link>
              <button
                type="button"
                onClick={() =>
                  setProjects((oldProjects: ProjectData[]) =>
                    oldProjects.filter((_, i: number) => i != index)
                  )
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
