import React, { useState } from "react";
import { items } from "./Slide1";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Slide2 = () => {
  const [slideNumber, setSlideNumber] = useState(3);

  return (
    <div className="lg:w-[50%] overflow-x-hidden">
      <div className="flex justify-start items-end mb-3">
        <p className="font-bold lg:text-xl lg:w-[20%] w-[40%] border-b-2 border-orange-600 border-solid">
          Best Sellers
        </p>
        <div className="space-x-3 lg:w-[80%] w-[60%] flex place-content-end border-b-2 border-gray-300 border-solid pb-2">
          <div
            onClick={() => setSlideNumber(3)}
            className={`bg-base-300 ${
              slideNumber === 3 ? "w-10 bg-orange-600" : "w-3 bg-gray-600"
            } h-3 cursor-pointer rounded-full  hover:bg-orange-600`}
          ></div>
          <div
            onClick={() => setSlideNumber(6)}
            className={`bg-base-300 ${
              slideNumber === 6 ? "w-10 bg-orange-600" : "w-3 bg-gray-600"
            } h-3  cursor-pointer rounded-full  hover:bg-orange-600`}
          ></div>
          <div
            onClick={() => setSlideNumber(9)}
            className={`bg-base-300 ${
              slideNumber === 9 ? "w-10 bg-orange-600" : "w-3 bg-gray-600"
            } h-3 cursor-pointer rounded-full  hover:bg-orange-600`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col">
        {items?.map((item) => (
          <div
            className={`flex space-x-3 transform transition-transform duration-500 ease-in-out ${
              item?._id <= slideNumber && item?._id > slideNumber - 3
                ? "translate-x-0"
                : "-translate-x-full absolute -top-[10000px]"
            }`}
          >
            <img src={item?.image} className="w-[100px] h-[100px]" alt="" />
            <div className="text-start">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((rate) =>
                  rate <= item?.rating ? (
                    <FaStar className="text-yellow-600" />
                  ) : (
                    <CiStar className="text-base-200" />
                  )
                )}
              </div>
              <p>{item?.name}</p>
              <p className="text-red-800 font-bold">${item?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
