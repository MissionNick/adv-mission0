import { FaBars } from 'react-icons/fa';
import styles from '../components/styles/MyCompany.module.css'


const { side_bar} = styles

export default function SideBar({ toggle }) {
  return (
    <div id={side_bar} onClick={toggle}>
      <FaBars size={28} onClick={toggle} />
    </div>
  );
}
