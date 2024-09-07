import ProjectData from "./project";
import React from "react";

type ProjectConsumerProps = {
  projects: ProjectData[];
  setProjects: React.Dispatch<ProjectData[]>;
};

export default ProjectConsumerProps;
