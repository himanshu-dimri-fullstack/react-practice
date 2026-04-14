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
                <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocI28aIpfalqDfvPHhN9XBSJW7QtRVaxvLFdVkokRIg9pCg3Ibf1=s288-c-no" /></div>
            </div>
        </div>
    )
}

export default Navbar