import Login from '../components/Login'
import styles from '../components/styles/MyCompany.module.css'

const { menu_item,menu} = styles;

export default function Menu() {
  return (
    <div id={menu}>
      <button className={menu_item}>Menu1</button>
      <button className={menu_item}>Menu2</button>
      <button className={menu_item}>Menu3</button>
      <Login />
    </div>
  );
}