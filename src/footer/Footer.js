import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from "@material-ui/icons";

const Footer = () => {
    const socialStyle ="m-3 rounded-full cursor-pointer p-2 text-white "
    return (
        <div className="flex items-center justify-around p-2 bg-purple">
            <div className="flex-1 flex-col flex-wrap p-2">
                <h1 className="text-[25px]">
                    BlackBoysCode
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <div className="flex item-center justify-center mt-3 self-start">
                    <div className={socialStyle + 'bg-blue-500'}>
                        <Facebook/>
                    </div>
                    <div className={socialStyle + 'bg-orange-500'}>
                        <Instagram />
                    </div>
                    <div className={socialStyle + 'bg-sky-400'}>
                        <Twitter />
                    </div>
                    <div className={socialStyle + 'bg-red-500'}>
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col p-2">
                <div className="flex m-3">
                    <LocationOnOutlined/>
                    <p className="pl-3">Nigeria</p>
                </div>
                <div className="flex m-3">
                    <LocalPhoneOutlined/>
                    <p className="pl-3">09022474959</p>
                </div>
                <div className="flex m-3">
                    <EmailOutlined/>
                    <p className="pl-3">tissan300@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;