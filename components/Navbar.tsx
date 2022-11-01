import Link from "next/link";
import React from "react";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";

function Navbar() {
  const { cartQuantity, cartToggle,isCartOpen } = useShoppingCart();
  console.log(isCartOpen);
  return (
    <nav className="bg-white shadow-md py-1 sticky top-0 z-50">
      <div className="text-sm font-medium text-gray-700 max-w-7xl mx-auto ">
        <div className="flex justify-between">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            <div>
              <Link className="hover:underline text-blue-700 " href={"/signIn"}>
                SignIn
              </Link>{" "}
              or{" "}
              <Link className="hover:underline text-blue-700" href={"/logIn"}>
                LogIn
              </Link>
            </div>
            <button className="hover:underline">Daily Deals</button>
            <button className="hover:underline">Help & Contact</button>
          </div>
          {/* Right */}
          <div className="flex space-x-4 ">
            <button className="hover:underline">Orders</button>
            <button className="flex items-center space-x-1">
              <div>Wishlist </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <button className="flex items-center space-x-1">
              <div>Account & List</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              {/* Cart icon */}
              <div
                className="flex justify-end cursor-pointer"
                onClick={() => cartToggle()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <div className="bg-blue-700 text-white rounded-full w-5 h-5 flex justify-center items-center absolute  translate-x-[20%] -translate-y-[35%] ">
                  {cartQuantity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
