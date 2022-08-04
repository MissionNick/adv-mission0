import Login from '../components/Login'
import styles from '../components/styles/MyCompany.module.css'

const { menu_item,menu} = styles;
function Menu() {

  return (
    <div className={menu} id="refMenu">
      <button className={menu_item}>Menu1</button>
      <button className={menu_item}>Menu2</button>
      <button className={menu_item}>Menu3</button>
      <Login />
    </div>
  );
}
export default Menu;

/* When expreimenting with forwardRef wrapper 
import React, { forwardRef } from 'react'
export default forwardRef(Menu); */