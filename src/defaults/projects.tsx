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
  {
    data: `if you want to create a vaiable in a text you have to write two hashtags '#', the varale name and again two hashtags (##variable##)
Hello ##name##. => (name = Manuel) => Hello Manuel.
if you want to write two hashtags but don't want to create a variable you have to write \\##
\\##\\## => ####
if you want to write \\## you have to write \\\\\\##
hello \\\\\\## => hello \\##`,
    name: "Tutorial",
  },
];

export default defaultProjects;
