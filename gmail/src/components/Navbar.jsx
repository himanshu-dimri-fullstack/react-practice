import { FaAlignJustify, FaSearchengin, FaBraille } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="px-6 h-20 flex items-center justify-between">
            <div className="flex gap-4">
                <div>
                    <FaAlignJustify className="text-xl mt-2" />
                </div>
                <div>
                    <img src="/assets/logo.png" />
                </div>
            </div>

            <div className="relative w-[50%]">
                <FaSearchengin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>
            <div className="flex gap-4">
                <div>
                    <MdContactSupport className="text-2xl" />
                </div>
                <div>
                    <IoMdSettings className="text-2xl" />
                </div>
                <div>
                    <FaBraille className="text-2xl" />
                </div>
            </div>
        </div >
    )
}

export default Navbar