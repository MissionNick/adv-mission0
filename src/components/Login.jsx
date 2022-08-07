import styles from '../components/styles/MyCompany.module.css'

const {menu_item,login} = styles

export default function Login() {
    
    return <button className={menu_item} id={login}>Login</button>;
}
