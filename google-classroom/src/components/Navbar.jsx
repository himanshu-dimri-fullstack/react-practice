import { Menu } from "lucide-react";
import { Plus } from "lucide-react";
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="left">
                <div><Menu /></div>
                <h5>Classroom</h5>
            </div>
            <div className="right">
                <div><Plus /></div>
                <div className="img"><img src="https://avatars.githubusercontent.com/u/256261357?v=4" /></div>
            </div>
        </div>
    )
}

export default Navbar