import { useRef , useState , useEffect } from "react"
import gsap from "gsap";
const Page3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const Hoverwindow = useRef(null);

  

  function CircleMove(e) {
    // const bound = document.querySelectorAll(".child")
    const top = Hoverwindow.current.getBoundingClientRect().top
    const left = Hoverwindow.current.getBoundingClientRect().left
  
    
    const xval = e.clientX -left
    const yval = e.clientY -top
    console.log (xval,yval)
    
    gsap.to(".circle", {
      x: xval -100 ,
      y: yval -120,
      
      duration: 0.1,
      ease: "power2.out",
    });
  }

  function CircleEnter(){
    console.log("heys")
    gsap.to(".circle", {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }
  function CircleLeave(){
    gsap.to(".circle", {
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  return (
    <div ref={Hoverwindow}  className=" w-screen min-h-screen  ">

      {/* mouse move circle */}
      <div className="circle overflow-x-hidden w-[18rem] opacity-40 z-10 pointer-events-none h-[18rem] scale-0  rounded-full bg-gray-300  flex items-center absolute"> </div>


      <div className="flex flex-wrap justify-between items-center z-30 ">
        
        <div onMouseMove={(e)=>{CircleMove(e)}} 
        onMouseEnter={()=>{CircleEnter()}}
        onMouseLeave={()=>{CircleLeave()}}
        
        
        
        
        className="child w-[35rem] h-[40rem] mx-6 z-30 hover:cursor-pointer flex flex-col items-center justify-center">
          <img src="/Page3_1.avif" className="w-[30rem] "></img>
          <h4 className="font-[hevatica] uppercase text-[2.0vh] mt-2">TWO KISSES & TWO HUGS CANDLES & SPRAY PACK</h4>
        </div>

        <div onMouseMove={(e)=>{CircleMove(e)}}
        onMouseEnter={()=>{CircleEnter()}}
        onMouseLeave={()=>{CircleLeave()}}
        
        
        
        
        className="child w-[35rem] h-[40rem] mx-6 z-30 hover:cursor-pointer flex flex-col items-center justify-center">
          <img src="/Page3_2.avif" className="w-[30rem]"></img>
          <h4 className="font-[hevatica] uppercase text-[2.0vh] mt-2">Donate 20 meals to a women shelter</h4>
        </div>

        <div onMouseMove={(e)=>{CircleMove(e)}} 
        onMouseEnter={()=>{CircleEnter()}}
        onMouseLeave={()=>{CircleLeave()}}
        
        
        
        
        className=" child w-[35rem] h-[40rem] mx-6 z-30 hover:cursor-pointer flex flex-col items-center justify-center">
          <img src="/Page3_3.avif" className="w-[30rem]"></img>
          <h4 className="font-[hevatica] uppercase text-[2.0vh] mt-2">Donate 20 meals to a women shelter</h4>
        </div>

        <div onMouseMove={(e)=>{CircleMove(e)}} 
        onMouseEnter={()=>{CircleEnter()}}
        onMouseLeave={()=>{CircleLeave()}}
        
        
        
        
        className=" child w-[35rem] h-[40rem] mx-6 z-30 hover:cursor-pointer flex flex-col items-center justify-center">
          <img src="/Page3_4.avif" className="w-[30rem]"></img>
          <h4 className="font-[hevatica] uppercase text-[2.0vh] mt-2">Donate 20 meals to a women shelter</h4>
        </div>

      </div>


    </div>
  )
}
export default Page3