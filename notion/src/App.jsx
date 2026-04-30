import './App.css'
import Sidebar from './components/Sidebar'
import { FaICursor } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { TbMenu } from "react-icons/tb";
import { MdOutlineWebAssetOff } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { FaLongArrowAltUp } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='w-[84%] h-screen flex flex-col overflow-hidden px-4'>
          <div className='h-[10vh] w-full flex justify-between items-center'>
            <div className='flex items-center gap-3 cursor-pointer'>
              <div className="border border-transparent rounded-[50%] bg-[#eee] p-1">
                <FaICursor className="text-md" />
              </div>
              <div className='text-sm font-semibold'>
                Notion AI
              </div>
              <div className='text-sm font-semibold'>
                /
              </div>
              <div className='flex'>
                <div className='text-sm font-semibold'>
                  Welcome to Notion
                </div>
                <div>
                  <RiArrowDropDownLine className='text-lg font-semibold' />
                </div>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <IoShareOutline className='text-lg' />
              </div>
              <div>
                <BiEdit className='text-lg' />
              </div>
              <div>
                <IoEllipsisHorizontal className='text-lg' />
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center mt-10 overflow-y-auto '>
            <div className='w-[60%]'>
              <div className='flex gap-3'>
                <div className="border border-transparent rounded-[50%] bg-[#eee] p-1">
                  <FaICursor className="text-sm" />
                </div>
                <div className='text-sm font-semibold pt-0.5'>
                  Notion AI
                </div>
              </div>
              <div className='h-30 group'>
                <div className='text-md mt-3'>
                  Welcome to Notion, Himanshu! Let's set up something useful together.
                  What do you want to do first?
                </div>
                <div className='hidden group-hover:flex gap-3 mt-4'>
                  <div>
                    <MdOutlineContentCopy className='text-sm' />
                  </div>
                  <div>
                    <FaPlus className='text-sm' />
                  </div>
                  <div>
                    <BiLike className='text-sm' />
                  </div>
                  <div>
                    <BiDislike className='text-sm' />
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <div className='text-sm w-30 font-semibold text-center p-2 border border-transparent rounded-2xl bg-[#eee]'>
                  Track Task
                </div>
              </div>
              <div className='mt-3'>
                <div>
                  Got it — tasks add up fast. I can help you stay on top of everything in one place.
                  Is this just for you, or also your team?
                </div>
                <div className='flex mt-2'>
                  <div className='text-sm w-fit font-semibold text-center py-2 px-3 border border-transparent rounded-2xl bg-[#eee]'>
                    Just me
                  </div>
                </div>
                <div className='flex mt-2'>
                  <div className='text-sm w-fit font-semibold text-center py-2 px-3 border border-transparent rounded-2xl bg-[#eee]'>
                    Small team (2-10)
                  </div>
                </div>
                <div className='flex mt-2'>
                  <div className='text-sm w-fit font-semibold text-center py-2 px-3 border border-transparent rounded-2xl bg-[#eee]'>
                    Medium team (10-50)
                  </div>
                </div>
                <div className='flex mt-2'>
                  <div className='text-sm w-fit font-semibold text-center py-2 px-3 border border-transparent rounded-2xl bg-[#eee]'>
                    Large Team (50+)
                  </div>
                </div>
                <div className='flex gap-3 mt-4'>
                  <div>
                    <MdOutlineContentCopy className='text-sm' />
                  </div>
                  <div>
                    <FaPlus className='text-sm' />
                  </div>
                  <div>
                    <BiLike className='text-sm' />
                  </div>
                  <div>
                    <BiDislike className='text-sm' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center pt-6'>
            <div className='w-[60%] relative'>
              <textarea className='h-25 w-full px-3 border border-[#ccc] outline-none focus:ring-1 focus:ring-blue-400'></textarea>
              <div className='absolute w-full bottom-3 px-3'>
                <div className='flex justify-between'>
                  <div className='flex gap-3'>
                    <div className='border border-transparent rounded-[50%] hover:bg-[#ddd] p-1'>
                      <FaPlus className='text-sm' />
                    </div>
                    <div className='border border-transparent rounded-[50%] hover:bg-[#ddd] p-1'>
                      <TbMenu className='text-sm' />
                    </div>
                    <div className='border border-transparent rounded-[50%] hover:bg-[#ddd] p-1'>
                      <MdOutlineWebAssetOff className='text-sm' />
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <div className='border border-transparent rounded-[50%] hover:bg-[#ddd] p-1'>
                      <HiOutlineMicrophone className='text-sm' />
                    </div>
                    <div className='border border-transparent rounded-[50%] hover:bg-[#ddd] p-1'>
                      <FaLongArrowAltUp className='text-sm' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default App