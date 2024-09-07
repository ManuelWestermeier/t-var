import SetPorjectsType from "./set-projects-type";
import ProjectData from "./project";

type ProjectConsumerProps = {
  projects: ProjectData[];
  setProjects: SetPorjectsType
};

export default ProjectConsumerProps;