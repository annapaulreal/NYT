import Logo from "./logo";
import { Link } from "react-router";
function Header() {
    return(
        <header className="p-8 border-b border-zinc-300">
            <Link to="/">
                <Logo />
            </Link>
        </header>
    )  
    
}

export default Header;