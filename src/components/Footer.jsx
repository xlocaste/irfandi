import Facebook from "./icons/Facebook";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-20 pb-0">
        <div className="flex flex-row gap-8">
          <div className="w-1/3">
            <p className="font-semibold text-xl">ABOUT</p>
            <p className="text-gray-300 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos libero aliquid optio, similique esse nesciunt repudiandae quis magni recusandae blanditiis.</p>
          </div>
          <div className="w-1/3">
            <p className="font-semibold text-xl">MENU</p>
            <div className="text-gray-300 text-sm">
              <p>HOME</p>
              <p>ABOUT</p>
              <p>SERVICES</p>
              <p>CONTACT</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">CONTACT</p>
            <div className="text-gray-300 text-sm">
              <Instagram />
              <Github />
              <Facebook />
              <Whatsapp />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-4 px-6 text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  