import { useState, useEffect } from "react";
import KeyIcon from "../../assets/images/icon/key.png";
import UserIcon from "../../assets/images/icon/user.png";
import SearchIcon from "../../assets/images/icon/search.png";
import MenuBar from "./MenuBar";
import { useMediaQuery } from "react-responsive";
import Search from "./Search";

function Header() {
  const [top, setTop] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 1320px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 450px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const isTouch = useMediaQuery({ query: "(max-width: 1000px)" });
  const [isViewMobile, setViewMobile] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 ${
        !isViewMobile && "transition duration-300"
      } ease-in-out bg-transparent ${
        isViewMobile && "backdrop-blur-md shadow-lg"
      } ${!top && "backdrop-blur-md shadow-lg"}`}
    >
      <div className="w-full mx-auto md:px-12 sm:px-6 px-2">
        <div className="flex items-center justify-between h-[72px] xl:h-28 lg:h-[104px] md:h-24 sm:h-[80px]">
          {/* Site branding */}
          <div className="flex justify-center items-center 2xl:mt-[20px] xl:mt-[10px]">
            {/* Logo */}
            <div className="2xl:mr-[40px] xl:mr-[30px] lg:mr-[23px] md:mr-[20px]">
              <img
                alt="user"
                src={UserIcon}
                className={`${
                  isDesktop
                    ? "w-[45px] h-[45px]"
                    : "2xl:w-[43px] xl:w-[41px] lg:w-[36px] md:w-[34px] w-[33px] 2xl:h-[43px] xl:h-[41px] lg:h-[36px] md:h-[34px] h-[33px]"
                } cursor-pointer hover:scale-[1.05] trasition duration-300`}
              />
            </div>
            <div
              className={`${
                isDesktop
                  ? "w-[380px] h-[50px]"
                  : "2xl:w-[310px] xl:w-[300px] lg:w-[260px] md:w-[250px] 2xl:h-[43px] xl:h-[41px] lg:h-[38px] sm:h-[37px] h-[35px]"
              } relative ${isTouch && "hidden w-0"}`}
            >
              <input
                type="text"
                placeholder="SEARCH"
                className="2xl:placeholder:text-[18px] xl:placeholder:text-[16px] lg:placeholder:text-[15px] md:placeholder:text-[14px] placeholder:text-[#92979F] placeholder:font-bold w-full h-full bg-transparent rounded-[20px] border-[3px] border-[#656C76] hover:border-[#757c86] focus:outline-0 text-[18px] text-[#e8ebee] pl-[50px]"
              />
              <div className="absolute my-auto top-0 bottom-0 flex items-center pl-[17px]">
                <img
                  alt="search"
                  src={SearchIcon}
                  className="2xl:w-[26px] xl:w-[24px] w-[20px] 2xl:h-[26px] xl:h-[24px] h-[20px]"
                />
              </div>
            </div>
          </div>

          {/* Site navigation */}
          <nav className={`${!isTablet ? "hidden" : "flex flex-grow"}`}>
            <ul
              className={`flex flex-grow justify-end flex-wrap items-center ${
                isDesktop
                  ? "text-[22px]"
                  : "2xl:text-[18px] xl:text-[17px] lg:text-[16px]"
              }`}
            >
              <li>
                <div
                  className={`font-bold text-[#111111] hover:bg-[#8690a4] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  NEW RELEASE
                </div>
              </li>
              <li>
                <div
                  className={`font-bold text-[#111111] hover:bg-[#8690a4] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  UPCOMING
                </div>
              </li>
              <li>
                <div
                  className={`font-bold text-[#111111] hover:bg-[#8690a4] rounded-full px-[20px] py-[10px] flex items-center transition duration-500 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[40px]" : "mr-[20px]"
                  }`}
                >
                  SHOP
                </div>
              </li>
              <li>
                <div
                  className={`border-[3px] border-[#111111] ${
                    isDesktop ? "w-[200px]" : "w-[120px]"
                  } flex items-center transition duration-150 ease-in-out cursor-pointer ${
                    isDesktop ? "mr-[20px]" : "mr-[10px]"
                  }`}
                ></div>
              </li>
              <li>
                <div className="px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  <img
                    alt="imgdfd"
                    src={KeyIcon}
                    className={`${
                      isDesktop
                        ? "w-[55px] h-[55px]"
                        : "2xl:w-[47px] xl:w-[43px] lg:w-[40px] w-[40px] 2xl:h-[47px] xl:h-[43px] lg:h-[40px] h-[40px]"
                    } cursor-pointer hover:scale-[1.05] trasition duration-300`}
                  />
                </div>
              </li>
            </ul>
          </nav>
          <div className={`flex items-center ${isTablet && "hidden"}`}>
            <div className={`${isTouch ? "" : "hidden"} visible mr-[10px]`}>
              <Search
                isViewMobile={isViewMobile}
                setViewMobile={setViewMobile}
              />
            </div>
            <MenuBar
              isViewMobile={isViewMobile}
              setViewMobile={setViewMobile}
            />
          </div>
        </div>
        {isViewMobile && !isTablet && (
          <div className="w-full flex flex-col justify-center items-center xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] md:pb-[30px] pb-[20px]">
            {isTouch && isViewMobile && (
              <div
                className={`relative mx-auto ${
                  is2XSmall
                    ? "w-[70%] h-[35px]"
                    : "md:w-[50%] sm:w-[60%] w-[60%] lg:h-[50px] sm:h-[40px] h-[40px]"
                }`}
              >
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="placeholder:text-[18px] placeholder:text-[#92979F] placeholder:font-bold w-full h-full bg-transparent rounded-[20px] border-[3px] border-[#656C76] hover:border-[#757c86] focus:outline-0 text-[18px] text-[#e8ebee] pl-[50px]"
                />
                <div className="absolute my-auto top-0 bottom-0 flex items-center pl-[17px]">
                  <img
                    alt="search"
                    src={SearchIcon}
                    className="2xl:w-[26px] xl:w-[24px] w-[20px] 2xl:h-[26px] xl:h-[24px] h-[20px]"
                  />
                </div>
              </div>
            )}
            <div
              className={`mt-[20px] font-bold text-[#111111] text-center cursor-pointer`}
            >
              NEW RELEASE
            </div>
            <div
              className={`mt-[20px] font-bold text-[#111111] text-center cursor-pointer`}
            >
              UPCOMING
            </div>
            <div
              className={`mt-[20px] font-bold text-[#111111] text-center cursor-pointer`}
            >
              SHOP
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
