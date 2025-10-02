import { useState } from "react";
import { IoLogoXbox, IoMenu } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";



const Navbar = () => {
const [isClick , setIsClick] = useState<boolean>(false)
  return (
    <nav className="bg-white shadow  ">
        <div className=" w-7xl py-6 mx-auto flex justify-between relative">

             <h1 className="text-3xl text-gray-400">logo</h1>
       <div onClick={() => setIsClick(true)} >
        <IoMenu className="text-5xl hover:text-red-500" />
       </div>
        </div>

        {isClick && (
            <div className="bg-black/80 w-60 absolute h-full top-0 z-40 text-white">
                <div className="flex justify-end p-5 text-2xl fond-fold" onClick={() => setIsClick(false)}><RxCross2 /></div>
                <h1 className="text-center text-xl">Home</h1>
            </div>
        )}
      

    </nav>
  )
}

export default Navbar