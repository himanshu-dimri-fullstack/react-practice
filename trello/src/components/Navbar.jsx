import { FaGripHorizontal } from "react-icons/fa";
import { ImTrello } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="flex items-center gap-4 px-3 h-[10vh]">
            {/* navleft */}
            <div className="flex items-center gap-4 w-[15%]">
                <div>
                    <FaGripHorizontal className="text-xl text-[#1C2B42]" />
                </div>
                <div className="flex gap-2">
                    <div>
                        <ImTrello className="text-2xl text-[#1868DB]" />
                    </div>
                    <div className="text-md font-semibold text-[#1C2B42]">
                        Trello
                    </div>
                </div>

            </div>
            {/* navcenter */}
            <div className="w-[60%] relative">
                <div className="flex gap-2">
                    <input placeholder="Search" className="w-full pl-8 h-[6vh] border border-[#ddd] rounded outline-none focus:ring-1 focus:ring-[#1868DB]" />
                    <div className="flex border border-transparent rounded cursor-pointer items-center h-[6vh] px-3 bg-[#1868DB] text-white text-sm font-semibold">Create</div>
                </div>
                <div className="absolute top-[50%] left-2 -translate-y-1/2">
                    <FaSearch />
                </div>
            </div>
            {/* navbarright */}
            <div className="flex w-[25%] justify-end items-center gap-4">
                <div className="flex border border-transparent rounded cursor-pointer items-center h-[6vh] px-3 bg-linear-to-l from-[#1868DB] to-[#964ac0] text-white text-sm font-semibold">12 days left</div>
                <div>
                    <HiSpeakerphone className="text-xl text-[#1C2B42]" />
                </div>
                <div>
                    <IoIosNotifications className="text-xl text-[#1C2B42]" />
                </div>
                <div>
                    <IoIosHelpCircle className="text-xl text-[#1C2B42]" />
                </div>
                <div className="border border-transparent rounded-[50%] text-white bg-[#1868DB] p-1">
                    HD
                </div>
            </div>
        </div>
    )
}

export default Navbar