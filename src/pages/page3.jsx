import { useEffect, useRef, useState } from "react";

const Page3 = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current && isHovering) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      document.body.style.cursor = 'none'; // Hide default cursor
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      document.body.style.cursor = 'auto'; // Show default cursor
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = 'auto'; // Reset cursor on cleanup
    };
  }, [isHovering]);

  const products = [
    {
      id: 1,
      image: "/Product1.avif",
      title: "TWO KISSES & TWO HUGS CANDLES & SPRAY PACK",
      price: "$189",
      description: "A perfect combination of our signature scents"
    },
    {
      id: 2,
      image: "/Product2.avif", 
      title: "STRAWBERRY GUM LEAF, CORIANDER, BASIL + MINT CANDLE",
      price: "$89",
      description: "Fresh and invigorating natural scents"
    },
    {
      id: 3,
      image: "/Product3.avif",
      title: "CLEANSE & NOURISH COLLECTION",
      price: "$129",
      description: "Complete body and hand care set"
    },
    {
      id: 4,
      image: "/Mug1.avif",
      title: "TWO HUGS CANDLE",
      price: "$69",
      description: "Warm and comforting home fragrance"
    },
    {
      id: 5,
      image: "/Meal1.avif",
      title: "LOVE + CARE PACK",
      price: "$49",
      description: "Supporting women in need"
    },
    {
      id: 6,
      image: "/Bath1.avif",
      title: "CLEANSE & NOURISH HAND WASH",
      price: "$39",
      description: "Gentle and moisturizing hand care"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-[20rem] relative w-full bg-[#f8f8f8] py-16">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 w-8 h-8 bg-black rounded-full z-50 transition-all duration-100 ease-out ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center mb-12">
          <h1 className="font-[Futura] text-6xl md:text-8xl font-bold mb-4">
            SHOP THE
          </h1>
          <h1 className="font-[Futura] text-6xl md:text-8xl font-bold mb-8">
            COLLECTION
          </h1>
          <p className="font-[Helvatica] text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of products that make a difference. 
            Every purchase supports women experiencing domestic violence.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-none"
              data-scroll 
              data-scroll-speed={index % 2 === 0 ? "1" : "-0.5"}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform group-hover:scale-[103%]">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[Futura] text-sm font-bold mb-2 text-gray-800 uppercase tracking-wide">
                    {product.title}
                  </h3>
                  <p className="font-[Helvatica] text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-[Futura] text-lg font-bold">
                      {product.price}
                    </span>
                    <button className="bg-black text-white px-6 py-2 text-sm font-[Helvatica] uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center">
          <div className="border-t border-gray-300 pt-12">
            <h2 className="font-[Futura] text-4xl font-bold mb-4">
              MAKE A DIFFERENCE
            </h2>
            <p className="font-[Helvatica] text-lg text-gray-600 max-w-3xl mx-auto">
              Every purchase helps support and empower women experiencing domestic violence. 
              Together, we can create positive change in our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
