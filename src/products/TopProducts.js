import { Favorite, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";

const TopProducts = ({ id, name, category, price, wear, image }) => {
    // const [hoverEffect, setHoverEffects] = useState("");
    const [isHovering, setisHovering] = useState(false)
    // const handleMouseEnter = () => {
    //     setisHovering(true)
    // }
    // const handleMouseLeave = () => {
    //     setisHovering(false)
    // }
    // const handleHoverExit = ()=> {
    //     setHoverEffects('opacity-0')
    // }

    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer '
    return (
        <div className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative">
            <img src={image} alt="product image"
                onMouseOver={()=> setisHovering(true)}
                onMouseLeave={() => setisHovering(false)}
            />
            <div className={`flex items-center justify-center w-[100%] h-[100%] hover:opacity-100 absolute ${isHovering ? "" : "hidden"} `}
            >
                <div className={iconStyle}>
                    <ShoppingCartOutlined />
                </div>
                <div className={iconStyle}>
                    <FavoriteBorderOutlined />
                </div>
                <div className={iconStyle}>
                    <SearchOutlined />
                </div>
            </div>

        </div>
    );
}

export default TopProducts;