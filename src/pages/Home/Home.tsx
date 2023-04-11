import StarIcon from "../../assets/images/icon/star.png";
import HeroImg from "../../assets/images/home.png";
import TextSouth from "../../assets/images/text-south.png";
import TextBack from "../../assets/images/text-back.png";
import OptionIcon from "../../assets/images/icon/option.png";
import Discord from "../../assets/images/icon/discord.png";
import Instagram from "../../assets/images/icon/instagram.png";
import Telegram from "../../assets/images/icon/telegram.png";
import BackIcon from "../../assets/images/icon/back.png";
import { useEffect, useState, useRef, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { ScrollType } from "../../types";
import { Dialog, Transition } from "@headlessui/react";

const StyledPage = styled.div`
  width: full;
  height: 100vh;
  background: url(${HeroImg});
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollType, setScrollType] = useState(ScrollType.Initial);
  const isDesktop = useMediaQuery({ query: "(min-width: 1650px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 450px)" });

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      let dt = document.body.scrollHeight - window.innerHeight;
      if (currentScrollY < dt / 3) {
        setScrollType(ScrollType.Initial);
      } else if (currentScrollY < (2 * dt) / 3) {
        setScrollType(ScrollType.Middle);
      } else {
        setScrollType(ScrollType.End);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <StyledPage className="text-white lg:pt-[100px] sm:pt-[90px] pt-[60px] xl:px-[80px] lg:px-[60px] md:px-[40px] px-[20px]">
      <div className="w-full h-full relative">
        {/* <div className="absolute top-0 left-0 w-full 2xl:h-screen z-[-1]">
        <img alt="back" src={HeroImg} className="w-full h-full" />
      </div> */}
        <div
          className={`absolute top-0 bottom-0 my-auto flex flex-col z-0 xl:h-[230px] lg:h-[180px] h-[120px] 2xl:left-[-150px] xl:left-[-150px] lg:left-[-110px] md:left-[-80px] left-[-50px] ${
            isDesktop
              ? "w-[1300px] h-[330px] left-[-200px] top-0 bottom-0"
              : `2xl:w-[900px] 2xl:h-[270px] xl:w-[800px] lg:w-[650px] md:w-[550px] ${
                  is2XSmall ? "w-[300px] h-[80px]" : "w-[420px]"
                }`
          }`}
        >
          <img alt="back" src={TextBack} className="w-full h-full" />
        </div>
        <div className="absolute top-0 bottom-0 my-auto flex flex-col h-[500px] justify-center">
          {/* <div className="flex flex-col 2xl:mt-[170px] xl:mt-[120px] lg:mt-[90px] mt-[150px]"> */}
          <div
            className={`${
              isDesktop
                ? "w-[800px]"
                : "xl:w-[550px] lg:w-[450px] md:w-[400px] sm:w-[350px] w-[250px]"
            } text-[#aaaaaa] tracking-[0.08em] leading-none`}
          >
            <img alt="south" src={TextSouth} className="w-full h-full" />
          </div>
          <div className="flex gap-[10px] lg:mt-0 mt-[10px]">
            <img
              alt="star"
              src={StarIcon}
              className="xl:w-[40px] lg:w-[30px] w-[25px] xl:h-[40px] lg:h-[30px] h-[25px]"
            />
            <img
              alt="star"
              src={StarIcon}
              className="xl:w-[40px] lg:w-[30px] w-[25px] xl:h-[40px] lg:h-[30px] h-[25px]"
            />
            <img
              alt="star"
              src={StarIcon}
              className="xl:w-[40px] lg:w-[30px] w-[25px] xl:h-[40px] lg:h-[30px] h-[25px]"
            />
            <img
              alt="star"
              src={StarIcon}
              className="xl:w-[40px] lg:w-[30px] w-[25px] xl:h-[40px] lg:h-[30px] h-[25px]"
            />
            <img
              alt="star"
              src={StarIcon}
              className="xl:w-[40px] lg:w-[30px] w-[25px] xl:h-[40px] lg:h-[30px] h-[25px]"
            />
          </div>
          <div
            className={`${
              isDesktop
                ? "text-[32px]"
                : "xl:text-[25px] md:text-[23px] sm:text-[22px] text-[20px]"
            } text-[#cccccc] xl:mt-[20px] lg:mt-[10px] mt-[30px] lg:w-1/2 lg:pr-0 sm:pr-[180px] pr-[70px]`}
            style={{ fontFamily: "Agrandir Narrow Thin" }}
          >
            The original pattern made by South Clothing Production. It is
            expertly made from materials of the highest caliber. We want to
            offer the top and most innovative design solutions.
          </div>
          <div className="xl:mt-[30px] lg:mt-[20px] md:mt-[50px] mt-[30px]">
            <div
              className={`bg-[#943737] hover:bg-[#a04343] ${
                isDesktop
                  ? "w-[220px] py-[13px] text-[24px]"
                  : "md:w-[180px] sm:w-[150px] w-[130px] md:py-[8px] sm:py-[8px] py-[7px] xl:text-[20px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[14px]"
              } flex justify-center items-center rounded-full cursor-pointer shadow-lg`}
            >
              ADD TO CART
            </div>
          </div>
        </div>
        <Transition
          enter="ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          appear
          show={!isOpen}
          as={Fragment}
        >
          <div className="absolute 2xl:bottom-[30px] xl:bottom-[20px] lg:bottom-[10px] md:bottom-[15px] bottom-[20px] 2xl:left-[-30px] xl:left-[-4px] lg:left-[-30px] md:left-[-15px] left-[0px]">
            <img
              alt="dfa"
              src={OptionIcon}
              className="2xl:w-[60px] xl:w-[55px] lg:w-[50px] md:w-[45px] w-[40px] 2xl:h-[60px] xl:h-[55px] lg:h-[50px] md:h-[45px] h-[40px] cursor-pointer hover:scale-[1.1] transition duration-500"
              onClick={openModal}
              // onMouseEnter={() => openModal()}
              // onMouseLeave={() => closeModal()}
            />
          </div>
        </Transition>
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
          appear
          show={isOpen}
          as={Fragment}
        >
          <div className="absolute 2xl:bottom-[10px] xl:bottom-[0px] bottom-[0px] 2xl:left-[-60px] xl:left-[-65px] lg:left-[-47px] md:left-[-25px] left-[-10px] overflow-y-auto">
            <div className="flex flex-wrap 2xl:w-[130px] xl:w-[120px] lg:w-[100px] md:w-[100px] sm:w-[90px] w-[80px] 2xl:h-[130px] xl:h-[120px] lg:h-[100px] md:h-[100px] sm:h-[90px] h-[80px] p-1">
              <div className="w-1/2 h-1/2 p-[2px] cursor-pointer">
                <img
                  alt="linkbtn"
                  src={Telegram}
                  className="w-full h-full hover:scale-[1.08] trasition duration-300"
                />
              </div>
              <div className="w-1/2 h-1/2 p-[2px] cursor-pointer">
                <img
                  alt="linkbtn"
                  src={Instagram}
                  className="w-full h-full hover:scale-[1.08] trasition duration-300"
                />
              </div>
              <div
                className="w-1/2 h-1/2 p-[2px] cursor-pointer"
                onClick={closeModal}
              >
                <img
                  alt="linkbtn"
                  src={BackIcon}
                  className="w-full h-full scale-[0.95] hover:scale-[1.04] trasition duration-300"
                />
              </div>
              <div className="w-1/2 h-1/2 p-[2px] cursor-pointer">
                <img
                  alt="linkbtn"
                  src={Discord}
                  className="w-full h-full scale-[0.95] hover:scale-[1.04] trasition duration-300"
                />
              </div>
            </div>
          </div>
        </Transition>
        <div className="fixed top-[45%] right-[20px]">
          <div
            className={`rounded-full lg:bg-[#F4F9FF] bg-[#e3e6e9] cursor-pointer w-[30px] h-[30px] ${
              scrollType === ScrollType.Initial &&
              "scale-[1.5] transition duration-300"
            } hover:scale-[1.5] transition duration-300 mb-[30px] transition duration-300`}
          ></div>
          <div
            className={`rounded-full lg:bg-[#F4F9FF] bg-[#e3e6e9] cursor-pointer w-[30px] h-[30px] ${
              scrollType === ScrollType.Middle &&
              "scale-[1.5] transition duration-300"
            } hover:scale-[1.5] transition duration-300 mb-[30px] transition duration-300`}
          ></div>
          <div
            className={`rounded-full lg:bg-[#F4F9FF] bg-[#e3e6e9] cursor-pointer w-[30px] h-[30px] ${
              scrollType === ScrollType.End &&
              "scale-[1.5] transition duration-300"
            } hover:scale-[1.5] transition duration-300 mb-[30px] transition duration-300`}
          ></div>
        </div>
      </div>
    </StyledPage>
  );
};
export default Home;
