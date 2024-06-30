import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];
const Navbar = () => {
  return (
   <nav className="flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px:20 " >
    <div className="logo flex items-center ">
      <Image
      src={Logo}
      alt="It is logo of this page"
      
      ></Image>
      <div className=" hidden nav-item lg:flex gap-x-[56px] pl-[74px] ">
       { navLinks.map((item , id)=>(
        <p key={id} className="cursor-pointer font-medium text-[#36485c] " >
          {item.name}
        </p>
        ))}
      </div>
    </div>
<div className="flex items-center gap-x-5 " >
<p className="hidden lg:block font-medium pr-[56px] text-[#36485c] cursor-pointer
" >Open an Account</p>
<div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block cursor-pointer ">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />


</div>


   </nav>
  )
}

export default Navbar
