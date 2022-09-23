import ImageHolder from "./ImageHolder";
import { discoverOptions } from "../../utils/discoverOptions";

const Discover = () => {


    return (
        <div className='mt-44 flex' id="discover">
            <div className='flex flex-col mt-8 ml-20 mr-16'>
                <h1 className='text-spSize1 text-sp-gray2 font-bold'>Discover Your Perfect<br/> Home Today</h1>
                <p className=" my-5 text-spSize2 text-discover-color">Welcome to your source for leasing and
                    managing <br/> beautiful rental homes Indonesia</p>
                <button className="font-semibold bg-sp-orange px-7 py-1 h-[45px] rounded-sm text-white mr-auto">Discover
                    Now
                </button>
            </div>


            <div className='gap-8 w-[60%] grid grid-flow-col auto-cols-max'>
                {discoverOptions.map((option) => {
                    return (
                        <div className="relative w-[255px] h-[350px] [&:nth-child(2)]:flex [&:nth-child(2)]:flex-col [&:nth-child(2)]:bottom-12 last:w-[69px]" key={option.src}>
                            <ImageHolder src={option.src} firstText={option.firstText} secondText={option.secondText}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Discover
