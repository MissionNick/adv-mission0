import { FaBars } from 'react-icons/fa';
import styles from '../components/styles/MyCompany.module.css'

const { side_bar} = styles

export default function SideBar({ isOpen, toggle }) {
  return (
    <div id={side_bar} isOpen={isOpen} onClick={toggle}>
      <FaBars size={30} onClick={toggle} />
    </div>
  );
}
