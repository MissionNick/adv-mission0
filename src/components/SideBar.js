import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../components/styles/MyCompany.module.css";

const { side_bar } = styles;

export default function SideBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    const el = document.querySelector("#refMenu");
    setIsOpen(!isOpen);
    el.style.display = isOpen ? "flex" : "none";
    console.log("Is open ", isOpen, " Element ", el);
  };

  return (
    <div onClick={toggle} id={side_bar}>
      <FaBars size={28} />
    </div>
  );
}
