
import Logo from "./Logo";
import Menu from "./Menu";
import SideBar from "./SideBar";

import styles from "./styles/MyCompany.module.css";

const { header } = styles;


export default function Header() {


  

  return (
    <div id={header}>
      <Logo />
      <SideBar />
      <Menu  />
    </div>
  );
}
