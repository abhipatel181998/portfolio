import NavLink from "./nav-link/nav-link";
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="header w-full flex items-center">
      <Image className="nav-logo" src={"/svg/logo.svg"} alt={"logo"} width={30} height={20} />
      <div className="nav-container ml-auto">
        <IoMenu className="nav-icon md:hidden" size={30} />
        <ul className="nav-list hidden md:flex nav-links ">
            <NavLink text="home" href="#home" />
            <NavLink text="experiences" href="#experiences" />
            <NavLink text="projects" href="#projects" />
            <NavLink text="about-me" href="#about-me" />
            <NavLink text="contacts" href="#contects" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
