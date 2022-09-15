import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const Navlinks = () => {
    const [heading, setHeading] = useState('')
    const [subHeading, setSubHeading] = useState('')
    
    return ( 
    <>
        {links.map((link)=>( 
            <div key={link.id}> 
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5"
                         onClick={()=> {
                            heading !== link.name ? setHeading(link.name) : setHeading(''); setSubHeading('')
                        }
                    }>
                        {link.name}
                    </h1>
                    {link.submenu && (
                        <div>
                            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                </div>
                                <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                {
                                    link.sublinks.map((mysublink)=>(
                                        <div>
                                            <h1 className="text-lg font-semibold">
                                                {mysublink.Head}
                                            </h1>
                                                {mysublink.sublink.map((slink) =>(
                                                <li className="text-sm text-gray-600 my-2.5">
                                                    <Link to={slink.link} className="hover:text-primary">
                                                        {slink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* MOBILE MENU */}
                <div className={` ${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                    {link.sublinks.map((slinks)=>(
                        <div key={slinks.id}>
                            <div>
                                <h1 onClick={ () => 
                                    subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading()
                                    }
                                    className="py-4 pl-7 font-semibold md:pr-0 pr-5">
                                    {slinks.Head}
                                </h1>
                                <div className={` ${ subHeading === slinks.Head ? "md:hidden" : " hidden" } `}>
                                    {slinks.sublink.map((slink) =>(
                                        <li key={slink.id} className="py-3 pl-14">
                                            <Link to={slink.link}>{slink.name}</Link>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        ))
    }
    </>
     );
}
 
export default Navlinks;