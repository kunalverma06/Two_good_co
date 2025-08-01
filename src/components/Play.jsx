const PlayComp = (props) => {
    return (
        <div ref={props.ButtonRef} className=" PlayButton rounded-full bg-black flex  p-[2rem]   absolute  ">
            <h3 className="text-white">Play</h3>
        </div>
    );
}
export default PlayComp;