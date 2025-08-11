
const Menu = () => {
  return (
    <div className="  w-screen h-screen bg-black        ">  
       
      <div className="flex justify-end w-screen mt-[10rem] overflow-hidden">
        <ul className="flex flex-col font-[futura] text-[8.2vh] leading-[8vh] items-end text-white mr-8 ">
          <li><a href="#home">SHOP</a></li> 
          <li><a href="#home">WHOLESALE</a></li>
          <li><a href="#home">CATERING</a></li>
          <li><a href="#home">IMPACT</a></li>
          <li><a href="#home">STORIES</a></li>
          <li><a href="#home">ABOUT</a></li>
          <li><a href="#home">CONTACT</a></li>
          <li><a href="#home">DONATE</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;