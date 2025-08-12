import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className=" relative flex mb-4 justify-between px-[10px] z-50">
        <div>
          <img src={showMenu ===true ? "/Logo2.svg": "/Logo.svg"} alt="Logo" className="h-[5rem] mt-4 z-50 text-white"  />
        </div>

        <ul className=" h-[3.5rem] w-auto flex gap-[4rem] font-[hevatica] text-[2.3vh] items-center ">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`relative p-[1vh] transition-colors duration-300 hover:text-gray-500 group
                  ${showMenu=== true ? "text-white " : "text-black"}
                `}
              >
                {item}
                <span className="absolute  bottom-[0vh] left-[1.3vh] w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-2vh)]"></span>
              </a>
            </li>
          ))}
          <HiOutlineMenuAlt4
            className={`mr-4 hover:cursor-pointer text-xl mt-0.5
              ${showMenu ? "text-white" : "text-black"}`}
            onClick={() => setShowMenu(!showMenu)}
          />
        </ul>
      </nav>

      {/* Overlay Menu */}
      <div
        className={` fixed top-0 left-0 w-screen h-screen bg-black z-10 flex items-center justify-center transition-all  ease-[cubic-bezier(0.22,1,0.36,1)] duration-500  
          ${showMenu ? " translate-y-0" : " -translate-y-full pointer-events-none"}
        `}
      >
        <Menu  isVisible={showMenu}/>
      </div>
    </div>
  );
};

export default Navbar;
