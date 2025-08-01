import Navbar from "../components/Navbar";
import VideoComponent from "../components/Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = () => {

    useGSAP(()=>{
        gsap.to(".Fontanimate", {
            y: -30,
            opacity: 1,
            delay: 0.5,
            duration: 1.5,
            stagger: 0.2,
        })
    })
    
    return(
        <div className="min-h-[30rem]">
                <Navbar />
            <div className="font-[futura]  mt-30 text-[32vh] leading-[28vh] pl-4">
                <h1 className="Fontanimate  w-[55rem]">CHANGE</h1>
                <h1 className="Fontanimate">THE COURSE</h1>
            </div>

            
            {/* Video Container */}
           <VideoComponent ></VideoComponent>
           {/* pledge Container */}
           <div className="w-full h-[13rem] mt-[8rem] leading-[3rem]">
               <h1 className="flex justify-center items-center font-[futura] text-6xl">TAKE THE PLEDGE.</h1>
               <h6 className="flex text-[2.3vh] justify-center font-medium font-[helvatica]">Support and empower women experiencing domestic violence, every day of the year.</h6>
               <h6 className="text-[1.9vh] font-[helvatica] flex justify-center underline underline-offset-6 ">LEARN MORE TODAY.</h6>
           </div>
           
           {/* line container */}
          <div className="w-full flex justify-center px-6 mb-1  ">
                 <div className="flex justify-between w-full max-w-7xl border-b border-gray-800 pb-1">
                <h6 className="text-[2.3vh] font-[helvatica]">BUY GOOD</h6>
                <h6 className="text-[2.3vh] font-[helvatica] ">DO GOOD</h6>
                </div>
            </div>

           
        </div>
    )
}
export default Page1;