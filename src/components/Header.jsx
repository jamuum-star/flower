import { AlignLeft, ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="mb-[68px]">
        <div className="fixed w-full top-0 left-0 z-20 bg-white">
          <div className="container py-4 mx-auto flex items-center justify-between px-2">
            <div className="flex gap-4">
              <AlignLeft
                onClick={() => setOpen(true)}
                className="text-3xl sm:hidden cursor-pointer"
              />
              <div className="text-xl text-Red uppercase tracking-wide font-bold">
                <Link to={"/"}>
                  {" "}
                  EVE<span className=" text-SmoothRed">FLOWER</span>
                </Link>
              </div>
            </div>
            <div>
              <ul className="sm:flex items-center gap-4 hidden cursor-pointer">
                <div className="dropdown">
                  <button className="text-xl font-light flex items-center">
                    Flowers <ChevronDown className="ml-2" />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to="/seasonal-flowers">Seasonal Flowers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/native-flowers">Native Flowers</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/single-variety">Single Variety</Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="gifts"
                  className=" text-xl font-light transition-all duration-300"
                >
                  Gifts
                </Link>
                <Link
                  to="plants"
                  className=" text-xl font-light transition-all duration-300"
                >
                  PLANTS
                </Link>

                <Link
                  to="about"
                  className=" text-xl font-light transition-all duration-300"
                >
                  About
                </Link>
                <Link
                  to="contact"
                  className=" text-xl font-light transition-all duration-300"
                >
                  Contact
                </Link>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative md:block xs:hidden">
                <input
                  type="text"
                  placeholder="search"
                  className="py-2 border border-Gray px-2 text-sm placeholder:text-black outline-none rounded-sm"
                />
                <Search className=" absolute top-2 right-3 w-5" />
              </div>
              <div className="md:hidden">
                <Search onClick={() => setSearch(true)} />
                {search && (
                  <div className="z-20 bg-SmoothRed h-60 flex justify-center items-center p-4 absolute top-0 left-0 right-0">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="search"
                        className="py-4 w-full border border-Gray px-4 text-md placeholder:text-black outline-none rounded-sm"
                      />
                      <Search className="absolute top-4 right-5 w-9" />
                    </div>
                    <X
                      onClick={(prev) => setSearch(!prev)}
                      className="absolute top-5 right-5 text-White text-6xl"
                    />
                  </div>
                )}
              </div>
              <div className=" relative">
                <ShoppingBag />
                <span className=" absolute top-[-16px] right-[-6px] bg-SmoothRed text-white rounded-full w-5 h-5 text-center">
                  5
                </span>
              </div>
            </div>
            {isOpen && (
              <div className="fixed bg-SmoothRed h-full top-0  left-0 w-96 transition-all text-white flex justify-center flex-col shadow-lg">
                <ul className="flex flex-col items-center transition-transform  justify-center gap-12 text-3xl cursor-pointer">
                  <div className="dropdown">
                    <button className="text-xl font-light flex items-center">
                      Flowers <ChevronDown className="ml-2" />
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <Link to="/seasonal-flowers">Seasonal Flowers</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to="/native-flowers">Native Flowers</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to="/single-variety">Single Variety</Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                  to="gifts"
                  className=" text-xl font-light transition-all duration-300"
                >
                  Gifts
                </Link>

                  <Link
                    to="plants"
                    className=" text-xl font-light transition-all duration-300"
                  >
                    PLANTS
                  </Link>
                  <Link
                    to="about"
                    className=" text-xl font-light transition-all duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="contact"
                    className=" text-xl font-light transition-all duration-300"
                  >
                    Contact
                  </Link>
                </ul>
                <div className=" absolute top-10 right-10">
                  <X onClick={(prev) => setOpen(!prev)} className=" text-7xl" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
