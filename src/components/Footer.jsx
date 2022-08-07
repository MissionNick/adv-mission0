import Footer_pic1 from '../assets/images/background02.jfif'
import Footer_pic2 from '../assets/images/background07.jfif'
import Footer_pic3 from '../assets/images/background13.jfif'
import Card from './Card'
import styles from '../components/styles/MyCompany.module.css'

const {footer}= styles

export default function Footer() {
  return (
    <div id={footer}>
      <Card
        pic={Footer_pic1}
        title="Title text bold"
        text="More text but not so bold."
      />
      <Card
        pic={Footer_pic2}
        title="Title text bold"
        text="More text but not so bold"
      />
      <Card
        pic={Footer_pic3}
        title="Title text bold"
        text="More text but not so bold"
      />
    </div>
  );
}