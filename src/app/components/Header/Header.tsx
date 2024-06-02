import Image from "next/image";
import CryptousLogo from "../../../../public/Images/Logo/CryptousLogo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  title: string;
}

const Logo = () => (
  <Link href="#">
    <div className="flex items-center cursor-pointer">
      <Image
        src={CryptousLogo}
        alt="Logo Cryptous"
        title="Cryptous Logo"
        sizes="100vw"
        className="w-auto h-auto"
      />
      <span className="font-poppins text-xl font-bold ml-2 md:text-2xl">
        Cryptous
      </span>
    </div>
  </Link>
);

const Links = ({ href, title }: LinkProps) => {
  return (
    <div>
      <a
        href={href}
        className="hover:bg-white hover:bg-opacity-50 rounded px-4 md:px-2 font-poppins font-normal text-text-base"
      >
        {title}
      </a>
    </div>
  );
};

interface MenuProps {
  toggleMenu: () => void;
}

const Menu = ({ toggleMenu }: MenuProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center gap-1 cursor-pointer md:hidden"
      onClick={toggleMenu}
    >
      <div className="w-6 h-[2px] bg-white rounded-sm"></div>
      <div className="w-6 h-[2px] bg-white rounded-sm"></div>
      <div className="w-6 h-[2px] bg-white rounded-sm"></div>
    </div>
  );
};

const Button = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <Link href="#">
        <span className="font-poppins font-medium text-base text-white hidden md:block border-2 cursor-pointer border-buttonOrange py-2 px-6 rounded-full">
          Trade Now
        </span>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex items-center justify-between py-6 overflow-hidden">
      <div className="w-auto md:w-full flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex md:justify-center items-center">
          <Links href="#" title="Home" />
          <Links href="#" title="Company" />
          <Links href="#" title="About" />
          <Links href="#" title="Pricing" />
          <Links href="#" title="Team" />
          <Links href="#" title="Contact" />
          <Links href="#" title="Blog" />
        </nav>
        <Button />
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 bg-backgroundBlue text-white flex flex-col items-center justify-center z-50 md:hidden">
          <span
            className="absolute top-6 right-10 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            X
          </span>
          <nav className="text-center space-y-4 flex flex-col">
            <Links href="#" title="Home" />
            <Links href="#" title="Company" />
            <Links href="#" title="About" />
            <Links href="#" title="Pricing" />
            <Links href="#" title="Team" />
            <Links href="#" title="Contact" />
            <Links href="#" title="Blog" />
          </nav>
        </div>
      ) : (
        <Menu toggleMenu={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
