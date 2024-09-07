import concatPartsWithValues from "../../utils/concat-parts-with-values";
import ProjectConsumerProps from "../../types/project-consumer-props";
import { Navigate, useParams } from "react-router-dom";
import splitToParts from "../../utils/split-to-parts";
import ProjectData from "../../types/project";
import Values from "../../comp/values";
import { useState } from "react";
import "./index.css"

export default function EditPage({
  projects,
  setProjects,
}: ProjectConsumerProps) {
  const [values, setValues] = useState<Map<string, string>>(
    new Map<string, string>()
  );

  const { id } = useParams();
  const projectId = Number(id);

  if (isNaN(projectId) || !projects[projectId]) {
    return <Navigate to="/" />;
  }

  const project = projects[projectId];
  const splittedParts = splitToParts(project.data);
  const placeholders = splittedParts.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex col">
      <div className="flex col">
        <Values
          values={values}
          placeholders={placeholders}
          setValues={setValues}
        />
      </div>
      <div className="flex content">
        <textarea
          className="left"
          value={project.data}
          onChange={(e) => {
            const value = e.target.value;
            setProjects((oldProjects: ProjectData[]) => {
              return oldProjects.map((p: ProjectData, i: number) => {
                if (i === projectId) {
                  return { ...p, data: value };
                }
                return p;
              });
            });
          }}
        ></textarea>
        <textarea
          className="right"
          value={concatPartsWithValues(splittedParts, values)}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
