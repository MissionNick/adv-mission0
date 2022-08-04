import React,{ useState,useEffect,useRef } from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import SideBar from "./SideBar";

import styles from "./styles/MyCompany.module.css";

const { header } = styles;


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(0);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Is open ", isOpen, " Ref state ", menuRef.current);
    menuRef.current.style.display= (isOpen) ? "flex" : "none" 
    console.log(menuRef.current.style);
  };
 

  return (
    <div id={header}>
      <Logo />
      <SideBar onClick={toggle} />
      <Menu onClick={toggle} ref={menuRef} />
    </div>
  );
}
