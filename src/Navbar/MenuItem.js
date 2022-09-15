import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "./Button";
import Navlinks from "./NavLinks";

const MenuItem = ({showMenu, active}) => {
    return ( 
            <ul className={active ? 'flex-col flex items-center absolute inset-y-0 right-0  uppercase backdrop-blur-lg gap-12 justify-center p-8  h-max md:hidden ' : 'hidden'}>
                <Close onClick={showMenu} className="cursor-pointer"/>
                    <li className=''>
                        <Link to='/'>Home </Link>
                    </li>
                    <div>
                        <Navlinks/>
                    </div>
                    <div className="py-5">
                        <Button/>
                    </div>
                    <li className=''>
                        <Link to='/login' >Login</Link>
                    </li>
                    <li className=''>
                        <Link to='/signup'>SignUp</Link>                    
                    </li>
                    <li>
                        <span>0</span>
                    </li>
                </ul>
     );
}
 
export default MenuItem;