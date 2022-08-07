import React, { useContext } from "react";
import { MenuContext } from "../helper/Context";

import Login from "./Login";
import styles from "../components/styles/MyCompany.module.css";
const { menu_item, menu,menuHide } = styles;


function Menu() {
 
  const { isVisible, toggle } = useContext(MenuContext)
  return (
    <div onClick={toggle} className={isVisible?menu:menuHide}>
      <button className={menu_item}>Menu1</button>
      <button className={menu_item}>Menu2</button>
      <button className={menu_item}>Menu3</button>
      <Login />
    </div>
  );
};
export default Menu;

/* When experimenting with forwardRef wrapper 
import React, { forwardRef } from 'react'
export default forwardRef(Menu); */
