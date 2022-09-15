import './Navbar.css'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem';
import { useContext, useState } from 'react';
import { MenuOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import Navlinks from './NavLinks';
import Button from './Button';
import CartContext from '../context/CartContext';
import { Badge } from '@material-ui/core';


const Navbar = () => {

    const { items } = useContext(CartContext);
    console.log(items);

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='
         w-full
         text-gray-600  
         flex 
         justify-around
         px-0 
         '>

            {/* <div className='text-2xl font-bold text-center'>
                <h1>e <span className='block uppercase text-4xl'>Ido</span></h1>
            </div> */}

            <nav className=''>
                <div className='absolute right-6 md:hidden top-6 scale-150' >
                    <MenuOutlined onClick={showMenu} className="scale-150 cursor-pointer " />
                </div>
                <div className='flex items-center font-medium justify-around'>
                    {/* <div className='flex border-[2px] border-solid rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all' >
                        <input className='outline-none' type='text'/>
                        <Search />
                    </div> */}
                    <ul className='hidden md:flex gap-8 p-6 uppercase items-center text-gray-600 font-[Poppins]'>
                        <li className=''>
                            <Link to='/' className='py-7 px-3 inline-block'>Home </Link>
                        </li>
                        <Navlinks />
                    </ul>
                    <div className='md:block hidden'>
                        <Button />
                    </div>
                    <ul className='hidden md:flex gap-8 p-6 uppercase items-center text-gray-600 font-[Poppins]'>
                        <li className=''>
                            <Link to='/login' >Login</Link>
                        </li>
                        <li className=''>
                            <Link to='/signup'>SignUp</Link>
                        </li>
                        <li>
                            <Link to='/checkout'>
                                <Badge badgeContent= {items.length}>
                                    <ShoppingCartOutlined/>
                                </Badge>
                            
                                <span></span>
                            </Link>

                        </li>
                    </ul>
                </div>


                <MenuItem showMenu={showMenu} active={active} />

            </nav>
        </div>
    );
}

export default Navbar;