import './App.css'
import Navbar from './components/Navbar'
import { MdOutlineAllInbox } from "react-icons/md";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdOutlinePower } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CgTemplate } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineKeyboard } from "react-icons/md";
import { MdKeyboard } from "react-icons/md";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex gap-4 px-3 py-2'>
        {/* leftside */}
        <div className="w-[20%] border border-transparent rounded-xl overflow-hidden">
          <div className='h-[10vh] flex items-center bg-[#DCEAFE] justify-between px-3 rounded-t-xl'>

            <div className='flex items-center gap-2'>
              <div>
                <MdOutlineAllInbox className='text-xl' />
              </div>
              <div className='text-lg font-semibold'>
                Inbox
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div>
                <RxDragHandleHorizontal className='text-2xl font-semibold' />
              </div>
              <div>
                <IoEllipsisHorizontal className='text-xl' />
              </div>
            </div>

          </div>
          <div className='h-[73vh] bg-[#c4d9f7] rounded-b-xl pt-4 overflow-y-auto'>
            <div className='bg-[#eee] mx-2 p-3'>
              <div>
                <input placeholder='Add a card' className="w-full pl-4 h-[6vh] bg-white border border-[#aaa] rounded outline-none focus:ring-1 focus:ring-[#1868DB]" />
              </div>
              <div className='flex mt-2'>
                <div className="flex border border-transparent rounded cursor-pointer items-center h-[5vh] px-3 bg-[#1868DB] text-white text-sm font-semibold">Add card</div>
                <div className="flex border border-transparent rounded cursor-pointer items-center h-[5vh] px-3 bg-transparent text-black text-sm font-semibold">Cancel</div>
              </div>
            </div>

          </div>
        </div>

        {/* rightside */}
        <div className='w-[80%] overflow-hidden'>
          <div className='flex h-[10vh] px-3 items-center border border-transparent rounded-t-xl justify-between bg-[#9d35d4]'>
            {/* left */}
            <div className='flex items-center gap-4'>
              <div className='text-lg font-bold text-white'>
                My Trello board
              </div>
              <div>
                <HiOutlineBars3BottomLeft className='text-2xl text-white font-bold' />
              </div>
            </div>

            {/* right */}
            <div className='flex items-center gap-4'>
              <div className="border border-transparent rounded-[50%] text-white bg-[#1868DB] p-1">
                HD
              </div>
              <div>
                <MdOutlinePower className='text-2xl text-white' />
              </div>
              <div>
                <RxDragHandleHorizontal className='text-2xl text-white' />
              </div>
              <div className='text-2xl text-white'>
                <CiStar />
              </div>
              <div>
                <FaUserGroup className='text-2xl text-white' />
              </div>
              <div className="flex border border-[#ccc] rounded cursor-pointer items-center h-[6vh] px-3 bg-[#ccc] text-md font-semibold text-[#1C2B42]">
                Share
              </div>

              <div>
                <IoEllipsisHorizontal className='text-2xl text-white' />
              </div>
            </div>
          </div>

          <div className='h-[65vh] bg-linear-to-r from-[#c260f7] to-[#d460d0] shadow flex overflow-x-auto rounded-b-xl p-4'>
            <div className='flex items-start gap-4'>


              <div className='bg-yellow-300 w-60 px-3 border border-transparent rounded-xl cursor-pointer'>
                <div className='flex justify-between items-center h-10'>
                  <div className='text-md font-semibold'>
                    Today
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1'>
                      <FaLongArrowAltRight className='text-md' />
                      <FaLongArrowAltLeft className='text-md' />
                    </div>
                    <div>
                      <IoEllipsisHorizontal className='text-xl' />
                    </div>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='group cursor-pointer'>
                    <div className='flex justify-between px-3 pt-1 h-[6vh] bg-white border border-[#aaa] rounded'>
                      <div className='flex  gap-2'>
                        <div className='hidden group-hover:block'>
                          <input type='checkbox' />
                        </div>
                        <div className='text-sm text-[#292A2E] p-0.5 font-semibold'>
                          Start Using Trello
                        </div>
                      </div>

                      <div className='hidden group-hover:block p-0.5'>
                        <FaEdit className='text-sm' />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between h-10 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      <div>
                        <FaPlus className='text-md' />
                      </div>
                      <div className='text-sm font-semibold'>
                        Add a Card
                      </div>
                    </div>
                    <div>
                      <CgTemplate className='text-lg' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-blue-300 w-60 px-3 border border-transparent rounded-xl cursor-pointer'>
                <div className='flex justify-between items-center h-10'>
                  <div className='text-md font-semibold'>
                    Last Week
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1'>
                      <FaLongArrowAltRight className='text-md' />
                      <FaLongArrowAltLeft className='text-md' />
                    </div>
                    <div>
                      <IoEllipsisHorizontal className='text-xl' />
                    </div>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='group cursor-pointer'>
                    <div className='flex justify-between px-3 py-2 bg-white border border-[#aaa] rounded'>
                      <div className='flex gap-2'>
                        <div className='hidden group-hover:block'>
                          <input type='checkbox' />
                        </div>
                        <div className='text-sm text-[#292A2E] w-40 font-semibold'>
                          Design trello dashboard. Make sure the design should look premium.
                        </div>
                      </div>

                      <div className='hidden group-hover:block pt-0.5'>
                        <FaEdit className='text-sm' />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between h-10 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      <div>
                        <FaPlus className='text-md' />
                      </div>
                      <div className='text-sm font-semibold'>
                        Add a Card
                      </div>
                    </div>
                    <div>
                      <CgTemplate className='text-lg' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-yellow-300 w-60 px-3 border border-transparent rounded-xl cursor-pointer'>
                <div className='flex justify-between items-center h-10'>
                  <div className='text-md font-semibold'>
                    Last Week
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1'>
                      <FaLongArrowAltRight className='text-md' />
                      <FaLongArrowAltLeft className='text-md' />
                    </div>
                    <div>
                      <IoEllipsisHorizontal className='text-xl' />
                    </div>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='group cursor-pointer'>
                    <div className='flex justify-between px-3 py-2 bg-white border border-[#aaa] rounded'>
                      <div className='flex gap-2'>
                        <div className='hidden group-hover:block'>
                          <input type='checkbox' />
                        </div>
                        <div className='text-sm text-[#292A2E] w-40 font-semibold'>
                          Design trello dashboard. Make sure the design should look premium.
                        </div>
                      </div>

                      <div className='hidden group-hover:block pt-0.5'>
                        <FaEdit className='text-sm' />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between h-10 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      <div>
                        <FaPlus className='text-md' />
                      </div>
                      <div className='text-sm font-semibold'>
                        Add a Card
                      </div>
                    </div>
                    <div>
                      <CgTemplate className='text-lg' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-blue-300 w-60 px-3 border border-transparent rounded-xl cursor-pointer'>
                <div className='flex justify-between items-center h-10'>
                  <div className='text-md font-semibold'>
                    Last Week
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1'>
                      <FaLongArrowAltRight className='text-md' />
                      <FaLongArrowAltLeft className='text-md' />
                    </div>
                    <div>
                      <IoEllipsisHorizontal className='text-xl' />
                    </div>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='group cursor-pointer'>
                    <div className='flex justify-between px-3 py-2 bg-white border border-[#aaa] rounded'>
                      <div className='flex gap-2'>
                        <div className='hidden group-hover:block'>
                          <input type='checkbox' />
                        </div>
                        <div className='text-sm text-[#292A2E] w-40 font-semibold'>
                          Design trello dashboard. Make sure the design should look premium.
                        </div>
                      </div>

                      <div className='hidden group-hover:block pt-0.5'>
                        <FaEdit className='text-sm' />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between h-10 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      <div>
                        <FaPlus className='text-md' />
                      </div>
                      <div className='text-sm font-semibold'>
                        Add a Card
                      </div>
                    </div>
                    <div>
                      <CgTemplate className='text-lg' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-yellow-300 w-60 px-3 border border-transparent rounded-xl cursor-pointer'>
                <div className='flex justify-between items-center h-10'>
                  <div className='text-md font-semibold'>
                    Last Week
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1'>
                      <FaLongArrowAltRight className='text-md' />
                      <FaLongArrowAltLeft className='text-md' />
                    </div>
                    <div>
                      <IoEllipsisHorizontal className='text-xl' />
                    </div>
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='group cursor-pointer'>
                    <div className='flex justify-between px-3 py-2 bg-white border border-[#aaa] rounded'>
                      <div className='flex gap-2'>
                        <div className='hidden group-hover:block'>
                          <input type='checkbox' />
                        </div>
                        <div className='text-sm text-[#292A2E] w-40 font-semibold'>
                          Design trello dashboard. Make sure the design should look premium.
                        </div>
                      </div>

                      <div className='hidden group-hover:block pt-0.5'>
                        <FaEdit className='text-sm' />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between h-10 items-center mt-2'>
                    <div className='flex items-center gap-2'>
                      <div>
                        <FaPlus className='text-md' />
                      </div>
                      <div className='text-sm font-semibold'>
                        Add a Card
                      </div>
                    </div>
                    <div>
                      <CgTemplate className='text-lg' />
                    </div>
                  </div>
                </div>
              </div>





            </div>


          </div>

          <div className='relative h-[8vh] bg-linear-to-r from-[#c260f7] to-[#d460d0] cursor-pointer'>
            <div className='absolute left-6 bottom-0 translate-y-1/2'>
              <div className='flex items-center h-[7vh] w-120 px-4 border border-[#ccc] rounded-2xl cusror-pointer bg-white justify-between'>

                <div className='flex gap-2 hover:bg-[#eee] p-2 rounded-xl items-center'>
                  <div>
                    <MdOutlineAllInbox className='text-xl text-[#1868DB]' />
                  </div>
                  <div className='text-sm text-[#1868DB] font-semibold'>Inbox</div>
                </div>

                <div className='flex gap-2 hover:bg-[#eee] p-2 rounded-xl items-center'>
                  <div>
                    <LuShoppingBag className='text-xl text-[#1868DB]' />
                  </div>
                  <div className='text-sm text-[#1868DB] font-semibold'>Planner</div>
                </div>

                <div className='flex gap-2 hover:bg-[#eee] p-2 rounded-xl items-center'>
                  <div>
                    <MdOutlineKeyboard className='text-xl text-[#1868DB]' />
                  </div>
                  <div className='text-sm text-[#1868DB] font-semibold'>Board</div>
                </div>

                <div className='flex gap-2 hover:bg-[#eee] p-2 rounded-xl items-center'>
                  <div>
                    <MdKeyboard className='text-xl text-[#1868DB]' />
                  </div>
                  <div className='text-sm text-[#1868DB] font-semibold'>Switch Board</div>
                </div>

              </div>
            </div>
          </div>

          <div className='h-[4vh] bg-white'>

          </div>

        </div>

      </div>
    </>
  )
}

export default App