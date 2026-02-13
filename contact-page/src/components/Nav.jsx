import logo from "../assets/react.svg"
import  "../App.css"
const Nav = ()=>{
    return (
       <nav className="container">
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