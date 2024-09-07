import { Link } from "react-router-dom";

const tutorialText = `if you want to create a vaiable in a text you have to write two hashtags '#', the varale name and again two hashtags (##variable##)
Hello ##name##.
(name = Manuel) => Hello Manuel.
if you want to write two hashtags but don't want to create a variable you have to write \\##
\\##\\## => ####
if you want to write \\## you have to write \\\\\\##
hello \\\\\\## => hello \\##`;

export default function TutorialPage() {
  return (
    <>
      <h3>Tutorial</h3>
      {tutorialText.split("\n").map((line: string, index: number) => (
        <p key={index}>{line}</p>
      ))}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
