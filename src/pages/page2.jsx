import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverProduct from "../components/HoverProduct";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    //   useGSAP(()=>{
    //     gsap.utils.toArray(".scrollImage").forEach(element => {
    //         gsap.to(element,{
    //             opacity:1,
    //             duration:2,
    //             scrollTrigger:{
    //                 trigger: element,
    //                 start: "top 80%",
    //                 end: "top 20%",
    //                 markers: true,

    //             }}
    //         )
    //     })}
    // ,[])




    return (
        <div className="min-h-[20rem] grid grid-cols-3 gap-2 mt-2  pb-20">
            <div className="scrollImage product-item col-span-1 relative flex justify-center items-center">
                <img data-scroll data-scroll-speed="2" className="" src="/Product1.avif" />
                <div className="absolute flex ">
                    <HoverProduct
                        product={{
                            first_text: "SHOP",
                            second_text: "THINGS",
                            photo1: "/Mug1.avif",
                            photo2: "/Mug2.avif",
                            photo_text1: "TWO HUGS CANDLE",
                            photo_text2: "TWO KISSES CANDLE",
                        }}
                    />
                </div>
            </div>

            <div className="scrollImage product-item col-span-1 relative flex justify-center items-center">
                <img data-scroll data-scroll-speed="2" className="" src="/Product2.avif" />
                <div className="absolute flex">
                    <HoverProduct
                        product={{
                            first_text: "SHOP",
                            second_text: "DONATION",
                            photo1: "/Meal1.avif",
                            photo2: "/Meal2.avif",
                            photo_text1: "DONATE A LOVE + CARE PACK",
                            photo_text2: "20 MEALS TO DONATE TO A WOMEN'S SHELTER",
                        }}
                    />
                </div>
            </div>

            <div className=" scrollImage product-item col-span-1 relative flex justify-center items-center">
                <img data-scroll data-scroll-speed="2" className="" src="/Product3.avif" />
                <div className="absolute flex">
                    <HoverProduct
                        product={{
                            first_text: "SHOP",
                            second_text: "BATH",
                            photo1: "/Bath1.avif",
                            photo2: "/Bath2.avif",
                            photo_text1: "CLEANSE & NOURISH HAND WASH",
                            photo_text2: "CLEANSE & NOURISH BODY WASH",
                        }}
                    />
                </div>




            </div>
            <div className="flex justify-around w-screen mt-[7rem]  ">
                <h1 className="text-[10vh] uppercase w-[45rem] font-[Futura] leading-[9vh]">We believe in people, until they believe in themselves again.</h1>
                <div>
                    <div className="w-[20rem] text-[2.8vh] mb-[4rem] font-[helvetica]">Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</div>
                    <div className="w-[20rem] text-[2.8vh] font-[helvetica]">
                        With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</div>
                                </div>
                </div>
        </div>
    );
};

export default Page2;
