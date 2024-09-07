import { useNavigate } from "react-router-dom";

export default function checkFirstLoad() {
  const nav = useNavigate();
  if (localStorage.getItem("t-var-first-load") != "y") {
    localStorage.setItem("t-var-first-load", "y");
    nav("/tutorial");
  }
}