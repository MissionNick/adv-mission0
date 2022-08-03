import Login from "../components/Login";
import styles from "../components/styles/MyCompany.module.css";

const { side_menu_item,side_menu } = styles;

export default function SideMenu() {
  return (
    <div id={side_menu}>
      <button className={side_menu_item}>Menu1</button>
      <button className={side_menu_item}>Menu2</button>
      <button className={side_menu_item}>Menu3</button>
      <button className={side_menu_item}>Login</button>>
    </div>
  );
}
