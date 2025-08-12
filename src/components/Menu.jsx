import gsap from "gsap";
import { useEffect , useState} from "react";

const Menu = ({isVisible}) => {

  useEffect(()=>{
    if (isVisible == true) 
    {
    gsap.fromTo(".menu-items",{
      rotateX: -90,
      opacity: 0,
      
    },{
      rotateX: 0,
      opacity: 1,
      delay: 0.2,
      stagger: 0.03,
      duration: 0.3,
      transformOrigin: "70% 70%",
      
      
      
      ease: "power2.out",
    })
    }},[isVisible]);

  return (
    <div className=" perspective-container w-screen h-screen bg-black   ">  
       
      <div className=" flex justify-end w-screen mt-[10rem] overflow-hidden">
        <ul className="flex flex-col font-[futura] text-[8.2vh] leading-[8vh] items-end text-white mr-8 ">
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >SHOP </a></li>
          </div> 
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >WHOLESALE</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >CATERING</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >IMPACT</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >STORIES</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >ABOUT</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >CONTACT</a></li>
          </div>
          <div className="menu-items hover:text-gray-200">
            <li><a href="#home" >DONATE</a></li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Menu;