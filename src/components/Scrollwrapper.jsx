import React, { use, useRef } from 'react';
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
    Controllref.current = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.075, // optional, smoothness
    });

    // Update ScrollTrigger when Locomotive Scroll updates
    Controllref.current.on('scroll', ScrollTrigger.update);

    // Refresh ScrollTrigger after Locomotive Scroll is set up
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length ? Controllref.current.scrollTo(value, 0, 0) : Controllref.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => Controllref.current.update());
    ScrollTrigger.refresh();

    return () => {
      if (Controllref.current) {
        Controllref.current.destroy();
      }
    };
  }, []);

    


    return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
    );
}
export default Scrollwrapper;