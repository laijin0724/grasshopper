import { useEffect, useState } from "react";
import LogoBlue from "../assets/svg/logo.blue.svg";
import LogoBlueMobile from "../assets/svg/logo.blue.mobile.svg";
import HeaderLogo from "../assets/svg/gh_icon.svg";
import MenuIcon from "../assets/svg/menu-icon.svg";
import CloseIcon from "../assets/svg/close-icon.svg";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [headerView, setHeaderView] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setHeaderView(false);
    if (scrollPosition !== 0) setHeaderView(true)
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="h-[60px] sm:h-[100px] relative">
      <div className="flex items-center h-full">
        <div className="px-10 flex flex-row w-full justify-between">
          <div className="flex">
            <img className="hidden sm:block" src={LogoBlue} alt="logo" />
            <img className="block sm:hidden" src={LogoBlueMobile} alt="logo" />
            <nav className="hidden md:flex items-center flex-row ml-10">
              <ul className="flex justify-center items-center text-base text-tx-header font-medium">
                <li className="mr-10 hover:text-tx-content cursor-pointer">What is Coding</li>
                <li className="mr-10 hover:text-tx-content cursor-pointer">Curriculum</li>
                <li className="hover:text-tx-content cursor-pointer">Glossary</li>
              </ul>
            </nav>
          </div>
          <nav className="hidden md:flex hover:text-tx-content cursor-pointer text-base text-tx-header font-medium">
            Sign In
          </nav>
          <div className="block md:hidden">
            <img src={MenuIcon} alt="menu icon" onClick={() => setMobileView(true)} />
          </div>
        </div>
        {headerView && <div className="z-50 hidden px-10 md:flex h-[100px] items-center fixed top-0 bg-bg-section w-full justify-between">
          <div className="flex">
            <img src={HeaderLogo} alt="header_logo" />
            <nav className="md:flex items-center flex-row ml-10">
              <ul className="flex justify-center items-center text-base text-tx-header font-medium">
                <li className="mr-10 hover:text-tx-content cursor-pointer">What is Coding</li>
                <li className="mr-10 hover:text-tx-content cursor-pointer">Curriculum</li>
                <li className="hover:text-tx-content cursor-pointer">Glossary</li>
              </ul>
            </nav>
          </div>
          <nav className="md:flex hover:text-tx-content cursor-pointer text-base text-tx-header font-medium">
            Sign In
          </nav>
        </div>}
      </div>
      {mobileView && <div className="h-full w-full bg-bg-section top-[50px] right-0 fixed p-5 z-[100]">
        <div className="flex flex-col">
          <div className="flex justify-between mb-[70px]">
            <img src={HeaderLogo} alt="header_logo" />
            <img src={CloseIcon} alt="close_icon" onClick={() => setMobileView(false)} />
          </div>
          <nav className="md:flex flex-col">
            <ul className="flex flex-col text-[28px] text-tx-header font-medium">
              <li className="mr-10 mb-[50px] hover:text-tx-content cursor-pointer">What is Coding</li>
              <li className="mr-10 mb-[50px] hover:text-tx-content cursor-pointer">Curriculum</li>
              <li className="mb-[50px] hover:text-tx-content cursor-pointer">Glossary</li>
            </ul>
          </nav>
        </div>
      </div>}
    </header>
  )
}

export default Header;