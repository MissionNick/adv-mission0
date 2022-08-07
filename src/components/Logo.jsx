import logo_alt from '../assets/images/logo6-steel.jpg'
import logo from '../assets/images/chromeV8.png'
import styles from '../components/styles/MyCompany.module.css'

const { my_coy, coy_logo1,coy_logo2 } = styles;


const Logo = () => {

  return (
    <div id={my_coy}>
      <img  src={logo} alt="img1" id={coy_logo2} />
      <img  src={logo_alt} alt="img2" id={coy_logo1} />
      <p>Chrome V8</p>
    </div>
  );
}

export default Logo;