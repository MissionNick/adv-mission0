import logo from '../assets/images/logo6.jfif'
import styles from '../components/styles/MyCompany.module.css'

const { my_coy, coy_logo } = styles;


const Logo = () => {

  return (
    <div id={my_coy}>
      <img src={logo} alt="" id={coy_logo} />
      <p>Chrome V8</p>
    </div>
  );
}

export default Logo;