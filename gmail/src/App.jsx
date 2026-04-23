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
import { FaRegStar } from "react-icons/fa";

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

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

            <div className="flex justify-between pl-4 py-2 cursor-pointer hover:bg-[#eee]">

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
                <div className="text-md font-semibold cursor-pointer">Your online protection has ended</div>
                <div className="text-md text-[#aaa] cursor-pointer">- Safeguard your devices with McAfee</div>
              </div>



            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App