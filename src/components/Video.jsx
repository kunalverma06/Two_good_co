import { useRef } from "react";
import PlayComp from "./Play";
import gsap from "gsap";

const VideoComponent = () => {
  const VideoRef = useRef(null);
  const ButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = VideoRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    // ✅ Check if mouse is within video bounds
    if (
      e.clientX >= bounds.left &&
      e.clientX <= bounds.right &&
      e.clientY >= bounds.top &&
      e.clientY <= bounds.bottom
    ) {
      gsap.to(ButtonRef.current, {
        opacity: 1,
        scale: 1,
        x: x - 30,
        y: y - 30,
        duration: 0.1,
        ease: "power2.out",
      });
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    gsap.to(ButtonRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={VideoRef}
      // onMouseMove={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <PlayComp ButtonRef={ButtonRef} />
      <div className="overflow-hidden flex justify-center mt-1">
        <video
          autoPlay
          loop
          muted
          className="relative w-[76rem] h-[40rem] object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
