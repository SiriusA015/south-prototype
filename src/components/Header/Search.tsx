import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import SearchIcon from "../../assets/images/icon/search1.png";

export interface SearchProps {
  isViewMobile: boolean;
  setViewMobile: (value: boolean) => void;
}
const Search = (props: SearchProps) => {
  const { isViewMobile, setViewMobile } = props;

  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => {
    setViewMobile(!isViewMobile);
  };
  const handleCloseMenu = () => {
    setViewMobile(false);
  };

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 -translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-14"
              >
                <div className="z-10 relative"></div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-50" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
      >
        <img
          alt="search-icon"
          src={SearchIcon}
          className="sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]"
        />
      </button>

      {/* {renderContent()} */}
    </>
  );
};

export default Search;
