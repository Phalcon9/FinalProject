import { Close } from "@material-ui/icons";
import { useState } from "react";

const Announce = () => {
    const [annStyle, setAnnStyle] = useState("bg-[#8a4af3] font-bold text-white flex items-center justify-center")
    const handleClose = ()=> {
        setAnnStyle(annStyle + " hidden")
    }
    return (
        <div className={annStyle}>
            <h1>Hurry up it's 40% off now</h1>
            <Close className="cursor-pointer" onClick={handleClose}/>
        </div>
    );
}

export default Announce;