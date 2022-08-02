import Footer_pic1 from '../assets/images/background01.jfif'
import Footer_pic2 from '../assets/images/background02.jfif'
import Footer_pic3 from '../assets/images/background03.jfif'
import BoxInfo from './BoxInfo'

export default function Footer() {
  return (
    <div id="Footer">
      <BoxInfo
        pic={Footer_pic1}
        text="Description of a feature of the company."
      />
      <BoxInfo
        pic={Footer_pic2}
        text="Description of a feature of the company."
      />
      <BoxInfo
        pic={Footer_pic3}
        text="Description of a feature of the company."
      />
    </div>
  );
}