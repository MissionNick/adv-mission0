import React, { forwardRef } from 'react'
import Login from '../components/Login'
import styles from '../components/styles/MyCompany.module.css'

const { menu_item,menu} = styles;
function Menu(props,ref) {
  return (
    <div id={menu} style={{ display: "flex" }} ref={ref}>
      <button className={menu_item}>Menu1</button>
      <button className={menu_item}>Menu2</button>
      <button className={menu_item}>Menu3</button>
      <Login />
    </div>
  );
}

export default forwardRef(Menu);