import Image from "next/image";
import CryptousLogo from "../../../public/Images/Logo/CryptousLogo.svg";
import { useEffect, useState } from "react";

const Logo = () => (
  <div className="flex items-center">
    <Image
      src={CryptousLogo}
      alt="Logo Cryptous"
      title="Cryptous Logo"
      sizes="100vw"
      className="w-full h-auto"
    />
    <span className="font-poppins text-xl font-bold ml-2">Cryptous</span>
  </div>
);

const Header: React.FC = () => {
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
      <Logo />
      {isMenuOpen ? (
        <div className="fixed inset-0 bg-backgroundBlue text-white flex flex-col items-center justify-center z-50">
          <span
            className="absolute top-6 right-10 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            X
          </span>
          <nav className="text-center space-y-4 flex flex-col">
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Company
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Team
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm hover:bg-white hover:bg-opacity-50 rounded px-4 py-2"
            >
              Blog
            </a>
          </nav>
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center text-center gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-[2px] bg-white rounded-sm"></div>
          <div className="w-6 h-[2px] bg-white rounded-sm"></div>
          <div className="w-6 h-[2px] bg-white rounded-sm"></div>
        </div>
      )}
    </header>
  );
};

export default Header;
