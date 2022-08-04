import Search from '../components/Seach'
import background from '../assets/images/background01.jfif'

import styles from '../components/styles/MyCompany.module.css'


const { content,home_tagline } = styles

export default function Content() {

       return (
         <div id={content} style={{ backgroundImage: `url(${background})` }}>
           <div id={home_tagline}>
             I spent a lot of money on booze, birds, and fast cars.
             The rest I just squandered –George Best
           </div>
           <Search />
         </div>
       );

}