import React, { useContext } from "react";
import { MenuContext } from "../helper/Context";

import { FaBars } from "react-icons/fa";
import styles from "../components/styles/MyCompany.module.css";

const { side_bar } = styles;

export default function SideBar() {
  const { toggle } = useContext(MenuContext);
  return (
    <div onClick={toggle} id={side_bar}>
      <FaBars size={28} />
    </div>
  );
}
