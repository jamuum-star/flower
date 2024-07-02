
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlignLeft, ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "../components/CartContext"; // Import useCart from CartContext


function Header() {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { cartItems } = useCart(); // Use the cartItems from the context

  return (
    <>
      <div className="mb-[68px]">
        <div className="fixed w-full top-0 left-0 z-20 bg-white shadow-md">
          <div className="container py-4 mx-auto flex items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-4">
              <AlignLeft
                onClick={() => setOpen(true)}
                className="text-3xl sm:hidden cursor-pointer"
              />
              <div className="text-2xl text-red-700 uppercase tracking-wide font-bold">
                <Link
                  to="/"
                  className="hover:text-red-600 transition duration-300"
                >
                  EVE<span className="text-red-500">FLOWER</span>
                </Link>
              </div>
            </div>
            <div>
              <ul className="sm:flex items-center gap-6 hidden cursor-pointer">
                <div className="relative group">
                  <button className="text-xl font-light flex items-center hover:text-red-600 transition duration-500">
                    Flowers <ChevronDown className="ml-2" />
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2">
                    <li className="dropdown-item">
                      <Link
                        to="/seasonal-flowers"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Seasonal Flowers
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/native-flowers"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Native Flowers
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        to="/single-variety"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Single Variety
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="gifts"
                  className="text-xl font-light hover:text-red-600 transition duration-300"
                >
                  Gifts
                </Link>
                <Link
                  to="plants"
                  className="text-xl font-light hover:text-red-600 transition duration-300"
                >
                  Plants
                </Link>
                <Link
                  to="about"
                  className="text-xl font-light hover:text-red-600 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="contact"
                  className="text-xl font-light hover:text-red-600 transition duration-300"
                >
                  Contact
                </Link>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 border border-gray-300 px-4 text-sm placeholder-gray-500 outline-none rounded-full"
                />
                <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
              <div className="md:hidden">
                <Search
                  onClick={() => setSearch(true)}
                  className="text-2xl cursor-pointer hover:text-red-600 transition duration-300"
                />
                {search && (
                  <div className="fixed inset-0 bg-red-700 bg-opacity-95 flex justify-center items-center p-4 z-30">
                    <div className="relative w-full max-w-lg">
                      <input
                        type="text"
                        placeholder="Search"
                        className="py-4 w-full border border-gray-300 px-4 text-md placeholder-gray-500 outline-none rounded-full"
                      />
                      <Search className="absolute top-4 right-5 w-6 h-6 text-gray-500" />
                    </div>
                    <X
                      onClick={() => setSearch(false)}
                      className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <Link to="/cart">
                  <ShoppingBag className="w-8 h-8 text-gray-700 hover:text-red-600 transition duration-300" />
                  <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                </Link>
              </div>
            </div>
            {isOpen && (
              <div className="fixed inset-0 bg-red-700 bg-opacity-95 flex justify-center items-center z-30">
                <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
                  <ul className="flex flex-col items-center gap-6 text-xl cursor-pointer">
                    <div className="dropdown">
                      <button className="text-xl font-light flex items-center hover:text-red-600 transition duration-500">
                        Flowers <ChevronDown className="ml-2" />
                      </button>
                      <ul className="mt-2 py-2">
                        <li className="dropdown-item">
                          <Link
                            to="/seasonal-flowers"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Seasonal Flowers
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link
                            to="/native-flowers"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Native Flowers
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link
                            to="/single-variety"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Single Variety
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to="gifts"
                      className="text-xl font-light hover:text-red-600 transition duration-300"
                    >
                      Gifts
                    </Link>
                    <Link
                      to="plants"
                      className="text-xl font-light hover:text-red-600 transition duration-300"
                    >
                      Plants
                    </Link>
                    <Link
                      to="about"
                      className="text-xl font-light hover:text-red-600 transition duration-300"
                    >
                      About
                    </Link>
                    <Link
                      to="contact"
                      className="text-xl font-light hover:text-red-600 transition duration-300"
                    >
                      Contact
                    </Link>
                  </ul>
                  <div className="absolute top-4 right-4">
                    <X
                      onClick={() => setOpen(false)}
                      className="text-gray-700 text-3xl cursor-pointer hover:text-red-600 transition duration-300"
                    />
                  </div>
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

