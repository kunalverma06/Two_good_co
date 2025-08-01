import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";


const HoverProduct = ({product}) => {
    
    return(
        <div className="flex group ">
            <div className=" flex w-[19rem] justify-center items-center rounded-4xl bg-[#dcc0b2] z-10 gap-8 px-[1.5rem] py-[1rem] hover:cursor-pointer  group ">
                <div><GoDotFill /></div>
                <div className="font-[hevantica] text-[2.3vh] tracking-wider">{product.first_text}</div>
                <div className="font-[Futura] font-extralight text-[2vh] tracking-wider ">{product.second_text}</div>
                <IoIosArrowForward className=" z-10 text-[2vh]"/>
            
            </div>
             <div className=" flex justify-center items-center pointer-events-none opacity-0 scale-95 h-5 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100
             group-hover:h-[19rem] w-[19rem] absolute rounded-4xl bg-white
             transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">

               
            <div >
                   <img src={product.photo1} className="" />  
                   <div className="flex justify-center " >
                       <h5 className="text-[2.2vh] font-medium w-[8rem] flex justify-center ">{product.photo_text1}</h5>
                   </div>
            </div>
            <div> 
              <img src={product.photo2} className="" />
             <div className="flex justify-center " >
                       <h5 className="text-[2.2vh] font-medium w-[8rem] flex justify-center  ">{product.photo_text2}</h5>
                   </div>
            </div>

            </div>
        </div>
    )

}
export default HoverProduct;