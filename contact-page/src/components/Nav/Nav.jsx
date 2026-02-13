import logo from "../../assets/react.svg";
import  "../../App.css"
import styles from "./Nav.module.css"
const Nav = ()=>{
    return (
       <nav className= {`${styles.nav} container`}>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       </nav>
    )
}

export default Nav