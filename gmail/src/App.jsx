import "./App.css"
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar"
import { MdOutlineRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosImage } from "react-icons/io";
import { FaWandMagic } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { FaRegStar, FaUser } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { RiFolderDownloadLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLightbulb } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";


const App = () => {
  return (
    <div className="bg-[rgb(248,250,253)] h-screen">

      <Navbar />

      <div className="flex overflow-hidden">

        <Sidebar />

        <div className="w-[75%] bg-white border border-[#eee] rounded-lg p-1">

          <div className="flex justify-between border-b border-[#ddd] py-2">

            <div className="flex gap-4  pl-4">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <MdOutlineRefresh className="text-xl mt-0.5" />
              </div>
              <div>
                <IoMdMore className="text-xl mt-0.5" />
              </div>
            </div>

            <div className="flex gap-4 pr-4">
              <div className="text-sm text-[#bbb]">1-50 of 4,976</div>
              <div>
                <FaAngleLeft className="text-sm mt-1 text-[#bbb]" />
              </div>
              <div>
                <FaAngleRight className="text-sm mt-1" />
              </div>
            </div>

          </div>

          <div className="flex gap-5 pl-4">

            <div className="flex gap-3 w-[25%] border-b-3 border-blue-500 py-4">
              <div>
                <IoIosImage className="text-md text-blue-500 mt-1 cursor-pointer" />
              </div>
              <div className="text-md text-blue-500 font-semibold cursor-pointer">
                Primary
              </div>
            </div>

            <div className="flex gap-3 w-[25%] py-4">
              <div>
                <FaWandMagic className="text-md mt-1 cursor-pointer" />
              </div>
              <div className="text-md cursor-pointer">
                Promotion
              </div>
            </div>

            <div className="flex gap-3 w-[25%] py-4">
              <div>
                <FaUserGroup className="text-md mt-1 cursor-pointer" />
              </div>
              <div className="text-md cursor-pointer">
                Social
              </div>
            </div>

            <div className="flex gap-3 w-[25%] py-4">
              <div>
                <FiInfo className="text-md mt-1 cursor-pointer" />
              </div>
              <div className="text-md cursor-pointer">
                Updates
              </div>
            </div>

          </div>

          <div className="h-[70vh] overflow-y-auto">

            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex group justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  Ishika Kanshal
                </div>
              </div>

              <div className="w-[75%]">
                <div className="flex gap-2 h-8">
                  <div className="text-md font-semibold cursor-pointer">C logical batch 59 - Test</div>
                  <div className="text-md text-[#aaa] cursor-pointer">- Hello Learners, Please find the attached test paper</div>
                  <div className="hidden group-hover:block">
                    <div className="flex gap-2 pl-3">
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiFolderDownloadLine className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiDeleteBin6Line className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <MdOutlineMoveToInbox className="text-lg text-red-500" />
                    </div>
                    <div>
                      Outlook-mc2y2...
                    </div>
                  </div>
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <GrDocumentPdf className="text-sm text-red-500" />
                    </div>
                    <div>
                      C logical Questi...
                    </div>
                  </div>
                </div>


              </div>




            </div>

            <div className="flex group justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  Ishika Kanshal
                </div>
              </div>

              <div className="w-[75%]">
                <div className="flex gap-2 h-8">
                  <div className="text-md font-semibold cursor-pointer">C logical batch 59 - Test</div>
                  <div className="text-md text-[#aaa] cursor-pointer">- Hello Learners, Please find the attached test paper</div>
                  <div className="hidden group-hover:block">
                    <div className="flex gap-2 pl-3">
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiFolderDownloadLine className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiDeleteBin6Line className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <MdOutlineMoveToInbox className="text-lg text-red-500" />
                    </div>
                    <div>
                      Outlook-mc2y2...
                    </div>
                  </div>
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <GrDocumentPdf className="text-sm text-red-500" />
                    </div>
                    <div>
                      C logical Questi...
                    </div>
                  </div>
                </div>


              </div>




            </div>

            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>
            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex group justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  Ishika Kanshal
                </div>
              </div>

              <div className="w-[75%]">
                <div className="flex gap-2 h-8">
                  <div className="text-md font-semibold cursor-pointer">C logical batch 59 - Test</div>
                  <div className="text-md text-[#aaa] cursor-pointer">- Hello Learners, Please find the attached test paper</div>
                  <div className="hidden group-hover:block">
                    <div className="flex gap-2 pl-3">
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiFolderDownloadLine className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiDeleteBin6Line className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <MdOutlineMoveToInbox className="text-lg text-red-500" />
                    </div>
                    <div>
                      Outlook-mc2y2...
                    </div>
                  </div>
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <GrDocumentPdf className="text-sm text-red-500" />
                    </div>
                    <div>
                      C logical Questi...
                    </div>
                  </div>
                </div>


              </div>




            </div>

            <div className="flex group justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  Ishika Kanshal
                </div>
              </div>

              <div className="w-[75%]">
                <div className="flex gap-2 h-8">
                  <div className="text-md font-semibold cursor-pointer">C logical batch 59 - Test</div>
                  <div className="text-md text-[#aaa] cursor-pointer">- Hello Learners, Please find the attached test paper</div>
                  <div className="hidden group-hover:block">
                    <div className="flex gap-2 pl-3">
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiFolderDownloadLine className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <RiDeleteBin6Line className="text-md text-[#161616]" />
                      </div>
                      <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                        <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <MdOutlineMoveToInbox className="text-lg text-red-500" />
                    </div>
                    <div>
                      Outlook-mc2y2...
                    </div>
                  </div>
                  <div className="flex mt-1 h-8 hover:bg-[#ccc] w-45 border border-[#ccc] rounded-3xl justify-center gap-2 items-center">
                    <div>
                      <GrDocumentPdf className="text-sm text-red-500" />
                    </div>
                    <div>
                      C logical Questi...
                    </div>
                  </div>
                </div>


              </div>




            </div>

            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>
            <div className="flex group justify-between pl-4 h-9 items-center cursor-pointer hover:bg-[#eee] hover:shadow-md">

              <div className="flex gap-4 w-[25%]">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <FaRegStar className="text-md text-[#ccc] mt-1 cursor-pointer" />
                </div>
                <div className="text-md font-semibold cursor-pointer">
                  McAfee
                </div>
              </div>

              <div className="flex gap-2 w-[75%]">
                <div className="text-md font-semibold cursor-pointer group-hover:pt-1">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer group-hover:pt-1">- Safeguard your devices with McAfee</div>

                <div className="hidden group-hover:block">
                  <div className="flex gap-2 pl-3">
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiFolderDownloadLine className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <RiDeleteBin6Line className="text-md text-[#161616]" />
                    </div>
                    <div className="h-8 w-8 flex justify-center items-center border border-transparent rounded-[50%] hover:bg-[#ddd]">
                      <MdOutlineMarkAsUnread className="text-md text-[#161616]" />
                    </div>
                  </div>

                </div>
              </div>



            </div>

          </div>

        </div>

        <div className="w-[5%] flex justify-center mt-4">
          <div>
            <div className="hover:bg-[#eee] p-3">
              <SlCalender className="text-2xl text-blue-500" />
            </div>
            <div className="mt-2 hover:bg-[#eee] p-3">
              <FaLightbulb className="text-2xl text-yellow-500" />
            </div>
            <div className="mt-2 hover:bg-[#eee] p-3">
              <TiTick className="text-2xl text-blue-500" />
            </div>
            <div className="mt-2 hover:bg-[#eee] p-3">
              <FaUser className="text-2xl text-blue-500" />
            </div>
            <div className="mt-4 p-3">
              <hr className="text-2xl text-[#ccc]" />
            </div>

            <div className="mt-4 hover:bg-[#eee] p-3">
              <IoMdAdd className="text-2xl text-black" />
            </div>

          </div>

        </div>

      </div >

    </div >
  )
}

export default App