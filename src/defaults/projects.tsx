import ProjectData from "../types/project";

const defaultProjects: ProjectData[] = [
  {
    data: `Subject: ##subject##

Hello ##recipient_name##,

I hope this message finds you well.

##main_content##

If you have any questions or need further assistance, please feel free to reach out.

Thank you and best regards,

##your_name##
##your_position##
##your_contact_information##
##your_company##`,
    name: "Email Test",
  },
];

export default defaultProjects;
