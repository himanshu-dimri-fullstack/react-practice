import { IoPencil } from "react-icons/io5";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { TbMessage2Check } from "react-icons/tb";
import { RiDraftLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { MdExpandMore } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='w-[20%] mt-5'>
            <div className="flex gap-4 justify-center mx-5 py-3 bg-[#c2e7ff] w-35 border rounded-lg
             border-[#c2e7ff] cursor-pointer shadow-[0_1px_2px_0_rgba(0,0,0,0),0_1px_3px_1px_rgba(0,0,0,0)]
             hover:shadow-[0_1px_2px_0_var(--tw-shadow-color,rgba(0,0,0,0.1)),0_1px_3px_1px_var(--tw-shadow-color,rgba(0,0,0,0.25))]">
                <div>
                    <IoPencil className="text-lg text-[#001d35] mt-1" />
                </div>
                <div>
                    <span className="text-md font-semibold text-[#001d35]">Compose</span>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex gap-4 w-[80%] py-1 pl-6 bg-[#c9ddff] rounded-r-2xl cursor-pointer">
                    <div>
                        <MdOutlineMoveToInbox className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md font-semibold">Inbox</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <FaRegStar className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">Starred</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <FaRegClock className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">Snoozed</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <TbMessage2Check className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">Sent</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <RiDraftLine className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">Draft</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <LuShoppingBag className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">Purchases</span>
                    </div>
                </div>
                <div className="flex gap-4 w-[80%] py-1 pl-6 hover:bg-[#eee] rounded-r-2xl cursor-pointer">
                    <div>
                        <MdExpandMore className="text-lg mt-1" />
                    </div>
                    <div>
                        <span className="text-md">More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar