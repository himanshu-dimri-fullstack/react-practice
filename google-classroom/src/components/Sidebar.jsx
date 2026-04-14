import { Archive, Calendar, GraduationCap, HatGlasses, Home, HomeIcon, LucideHome, Settings } from "lucide-react";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><Home size={18} /><a href="#">Home</a></li>
                <li><Calendar size={18} /><a href="#">Calender</a></li>
                <li><GraduationCap size={20} /><a href="#">Enrolled</a></li>
                <li><Archive size={18} /><a href="#">Archieve Classes</a></li>
                <li><Settings size={18} /><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar