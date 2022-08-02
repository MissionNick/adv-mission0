import logo from '../assets/images/logo4.jfif'
import styles from '../components/styles/MyCompany.module.css'



const Logo = () => {

  return (
    <div>
      <img src={logo} alt="My company" className={styles.coy_logo} />
    </div>
  );
}

export default Logo;