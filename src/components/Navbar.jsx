

const Navbar = () => {
    return(
        <div>
            <nav className="flex mb-4 justify-between p-[15px]">
                
                <div className="">
                    <img src="/Logo.svg" alt="" className="h-[5rem]" />
                </div>
                <ul className="flex gap-4 font-light text-[2.5vh]">
                    <li>
                        <a 
                            href="#home" 
                            className="relative p-[4vh] text-black transition-colors duration-300 hover:text-gray-500 group"
                        >
                            Home
                            <span className="absolute bottom-[3vh] left-[4vh] w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-8vh)]"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#about" 
                            className="relative p-[4vh] text-black transition-colors duration-300 hover:text-gray-500 group"
                        >
                            About
                            <span className="absolute bottom-[3vh] left-[4vh] w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-8vh)]"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className="relative p-[4vh] text-black transition-colors duration-300 hover:text-gray-500 group"
                        >
                            Contact
                            <span className="absolute bottom-[3vh] left-[4vh] w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-8vh)]"></span>
                        </a>
                    </li>
                </ul>

            </nav>

        </div>
    )
}
export default Navbar;