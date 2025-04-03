import "./header.scss"
import logo from "../../../assets/images/logo.png"

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
                <button>Generate inventory code</button>
            </div>
        </header>
    )
}