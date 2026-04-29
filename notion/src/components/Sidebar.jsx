import { BsBagFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { FaICursor } from "react-icons/fa";
import { MdInbox } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";



const Sidebar = () => {
    return (
        <div className="w-[16%] h-screen overflow-hidden flex flex-col bg-[#f8f3fc] border border-transparent border-r-[#ccc] p-1">
            <div className="overflow-y-auto">

                <div className="">



                    <div className="flex justify-between cursor-pointer text-[#2C2C2B] hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                        <div className="flex gap-2">
                            <div className="pt-1">
                                <BsBagFill className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Himanshu Dimri's...</span>
                            </div>
                        </div>
                        <div className="pt-1">
                            <FaRegEdit className="text-sm" />
                        </div>
                    </div>

                    <div className="p-3 mt-2 bg-white border border-[#eee] rounded-xl">
                        <div className="text-sm font-semibold">
                            Set up your workspace
                        </div>
                        <div className="flex items-center pt-2">
                            <div className="border border-transparent rounded-[50%] bg-[#eee] p-1">
                                <FaICursor className="text-md" />
                            </div>
                            <div className="w-full h-2 bg-blue-200">

                            </div>
                        </div>

                    </div>

                    <div className="mt-3">

                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <FaSearch className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Search</span>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <LuNewspaper className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Meeting</span>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <FaICursor className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Notion AI</span>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <MdInbox className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Inbox</span>
                            </div>
                        </div>

                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <IoLibraryOutline className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Library</span>
                            </div>
                        </div>

                    </div>

                    <div className="my-3">
                        <div className="flex gap-3 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div>
                                <span className="text-sm font-semibold">Agent</span>
                            </div>
                            <div className="text-sm p-1 border border-transparent rounded-md bg-[#eee]">
                                <span className="text-sm font-semibold">Beta</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <FaPlus className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">New agent </span>
                            </div>
                        </div>

                    </div>

                    <div className="my-3">
                        <div className="flex gap-3 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div>
                                <span className="text-sm font-semibold">Private</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <FaBook className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">The Notion Basics </span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <FaPlus className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Add New </span>
                            </div>
                        </div>

                    </div>

                    <div className="my-3">
                        <div className="flex gap-2 text-[#5F5E59] cursor-pointer hover:bg-[#eee] p-1 border border-transparent rounded-xl">
                            <div className="pt-1">
                                <RiDeleteBin5Fill className="text-sm" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Trash </span>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-end">
                        <div>
                            <IoIosHelpCircle className="text-md" />
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Sidebar