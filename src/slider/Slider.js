import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import sliderImg from "../img/shoe8.jpg"

const Slider = () => {
    const arrowStyle = " rounded-full bg-white flex justify-center items-center shadow-sm hover:cursor-pointer "
    return ( 
        <div className="parentDiv h-[540px] flex  justify-between">
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{fontSize : "50px"}}/>
            </div>
            <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden   bg-red" >
                <div className="slide flex items-center justify-center h-[100%]">
                    <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                        <img className="h-[100%] object-cover" src={sliderImg} alt='slide image ' />
                    </div>
                    {/* <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                        <h1 className="text-[55px]">Hey this is an awesome deal today</h1>
                        <p className="text-[30px]">Up to 40% off</p>
                        <button className="btn">shop-now</button>
                    </div> */}
                </div>
            </div>
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{fontSize : "50px"}}/>
            </div>
        </div>
     );
}
 
export default Slider;