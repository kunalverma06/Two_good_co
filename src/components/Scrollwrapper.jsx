import { useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Scrollwrapper = ({ children }) => {
    const scrollRef= useRef(null);
    const Controllref= useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    Controllref.current = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Set up scrollerProxy for GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? Controllref.current.scrollTo(value, 0, 0)
          : Controllref.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed"
    });

    // Update ScrollTrigger on Locomotive Scroll update
    Controllref.current.on('scroll', ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => Controllref.current && Controllref.current.update());
    ScrollTrigger.refresh();

    return () => {
      if (Controllref.current) {
        Controllref.current.destroy();
      }
      ScrollTrigger.removeEventListener("refresh", () => Controllref.current && Controllref.current.update());
    };
  }, []);

    


    return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
    );
}
export default Scrollwrapper;