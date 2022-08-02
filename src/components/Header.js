import Logo from "./Logo"
import Menu from "./Menu"
import Login from "./Login"
import styles from './styles/MyCompany.module.css'

const { header } = styles;

export default function Header() {
  return (
    <div id={header}>
      <Logo />
      <Menu />
    </div>
  );
}