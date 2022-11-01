import Image from "next/image";
import React, { useState } from "react";
import ipad from "../public/product.webp";
import check from "../public/check.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

// description
// id
// image
// price
// rating
// title
type productType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
};

function Card({ description, id, image, price, rating, title }: productType) {
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const {
    getItemQuantity,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  return (
    <div className="flex justify-between border-gray-50 max-w-5xl border-2 px-5 rounded mt-4 space-x-5">
      <div className="flex">
        {/* Image */}
        <div className="relative   w-60 max-h-80 bg-gray-50">
          <Image src={image} fill alt="" className="object-contain " />
        </div>
        {/* Product details */}
        <div className="my-5 ml-5">
          <div className="text-lg font-medium cursor-pointer hover:text-blue-800 max-w-3xl">
            {title}
          </div>
          <div className="mt-2 cursor-pointer">
            <span className="text-xs ">₹</span>
            <span className="font-semibold text-2xl">{price}</span>

            <span className="line-through text-xs text-gray-500">
              {" "}
              30,900.00
            </span>
          </div>
          <div className="text-gray-500 font-light text-sm">
            Save extra with No Cost EMI
          </div>

          {/* Assurence */}
          <div className="flex space-x-2 mt-2 items-center">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="absolute bg-green-600 text-white rounded-full flex justify-center items-center h-3 w-3 ml-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
            <span className="text-sm text-gray-700 font-medium">
              assured by <span className="italic font-semibold">Usherr</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        {/* Plus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mt-3 cursor-pointer"
          onClick={() => increaseCartQuantity(id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        {/* Heart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={`${addedToWishlist ? "red" : "none"}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${addedToWishlist ? "none" : "currentColor"}`}
          className={`w-4 h-4 mt-3.5 cursor-pointer ${
            addedToWishlist ? "scale-125  duration-200 ease-in-out" : ""
          }`}
          onClick={() => setAddedToWishlist((prevState) => !prevState)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
