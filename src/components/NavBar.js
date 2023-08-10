import { Component } from "react"
import "./NavBar.css"
import { menuItems } from "./NevLinksItem"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import {Link} from "react-router-dom"

class NavBar extends Component {

    state={clicked:false}

    handleClick=()=>
    {
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return (
            <nav className="navBarItems">
                <h1 className="navBar-logo">Wanderlyt</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    {this.state.clicked ? <AiOutlineClose size={30} /> : <BiMenuAltRight size={30} /> }
                </div>

                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.icon} {item.title}</Link>
                            </li>
                        )
                    })}
                    <Link to="/signUp"><button>Sign Up</button></Link>
                </ul>

            </nav>

        )
    }
}

export default NavBar