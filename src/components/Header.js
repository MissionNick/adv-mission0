import { useState } from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import SideBar from "./SideBar";

import styles from "./styles/MyCompany.module.css";

const { header } = styles;


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id={header} onClick={toggle}>
      <Logo />
      <SideBar />
      <Menu />
    </div>
  );
}
