import React, { useState } from "react";
import PC from "../../public/slice_1/HP_ELite_Pc.jpg";
import Camera from "../../public/slice_1/camara.jpg";
import earPhone from "../../public/slice_1/earphone.jpg";
import { FaRepeat } from "react-icons/fa6";
import { FaStarHalfAlt, FaHeart, FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

import { CiStar } from "react-icons/ci";

export const items = [
  {
    _id: 1,
    name: "HP Elite Computer",
    rating: 4,
    image: PC,
    price: 1.6,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 2,
    name: "Nikon D3300 AF-P DX 18-55m",
    rating: 3,
    image: Camera,
    price: 80.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 3,
    name: "Panasonic in-Ear stereo Earphones",
    rating: 4,
    image: earPhone,
    price: 68.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 4,
    name: "VR Goggles",
    rating: 5,
    image: earPhone,
    price: 68.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 5,
    name: "Nikon D3300 AF-P DX 18-55m",
    rating: 3,
    image: Camera,
    price: 80.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 6,
    name: "Panasonic in-Ear stereo Earphones",
    rating: 4,
    image: earPhone,
    price: 68.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 7,
    name: "HP Elite Computer",
    rating: 4,
    image: PC,
    price: 1.6,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
  {
    _id: 8,
    name: "VR Goggles",
    rating: 5,
    image: earPhone,
    price: 68.0,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore perspiciatis minus, eligendi vitae culpa?",
  },
];

const Slide1 = () => {
  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <div>
      <div className="carousel w-full lg:hidden inline-flex">
        {items?.map((item) => (
          <div id={`${item?._id}`} className="carousel-item relative w-full">
            <div className="w-full">
              <img className="w-full h-52" src={item?.image} alt={item?.name} />
              <div className="text-start flex flex-col space-y-1">
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
                <p>{item?.details}</p>
                <div>
                  <button className="btn btn-sm btn-neutral">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#${item?._id - 1}`}
                className="btn btn-circle btn-sm btn-neutral hover:bg-orange-600 hover:text-white"
              >
                ❮
              </a>
              <a
                href={`#${item?._id + 1}`}
                className="btn btn-circle btn-sm btn-neutral hover:bg-orange-600 hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel w-full hidden lg:inline-flex">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            {items
              ?.filter((item) => [1, 2, 3, 4]?.includes(item?._id))
              ?.map((item) => (
                <div
                  onMouseLeave={() => setHoveredCard(0)}
                  onMouseEnter={() => setHoveredCard(item?._id)}
                  key={item?._id}
                  className="lg:flex space-x-3 h-48 my-5"
                >
                  <div
                    className={`card p-0 lg:w-[40%] ${
                      hoveredCard === item?._id && "image-full"
                    }`}
                  >
                    <figure className="w-[100%] h-[100%]">
                      <img
                        className="w-[100%] h-[100%]"
                        src={item?.image}
                        alt="Shoes"
                      />
                    </figure>
                    {hoveredCard === item?._id && (
                      <div className="flex items-center space-x-3 justify-center z-40">
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaHeart />
                        </button>
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaRepeat />
                        </button>
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaSearch />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="text-start lg:w-[60%] flex flex-col space-y-1">
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
                    <p>{item?.details}</p>
                    {hoveredCard === item?._id && (
                      <div>
                        <button className="btn btn-sm btn-neutral">
                          Add to cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle btn-sm bg-base-300 hover:bg-orange-600 shadow-xl hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-sm bg-base-300 hover:bg-orange-600 shadow-xl hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="grid grid-cols-2 gap-2">
            {items
              ?.filter((item) => [5, 6, 7, 8]?.includes(item?._id))
              ?.map((item) => (
                <div
                  onMouseLeave={() => setHoveredCard(0)}
                  onMouseEnter={() => setHoveredCard(item?._id)}
                  key={item?._id}
                  className="flex space-x-3 h-48 my-5"
                >
                  <div
                    className={`card p-0 w-[40%] ${
                      hoveredCard === item?._id && "image-full"
                    }`}
                  >
                    <figure className="w-[100%] h-[100%]">
                      <img
                        className="w-[100%] h-[100%]"
                        src={item?.image}
                        alt="Shoes"
                      />
                    </figure>
                    {hoveredCard === item?._id && (
                      <div className="flex items-center space-x-3 justify-center z-40">
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaHeart />
                        </button>
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaRepeat />
                        </button>
                        <button className="btn btn-circle bg-white text-black hover:text-orange-600 hover:bg-white">
                          <FaSearch />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="text-start w-[60%] flex flex-col space-y-1">
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
                    <p>{item?.details}</p>
                    {hoveredCard === item?._id && (
                      <div>
                        <button className="btn btn-sm btn-neutral">
                          Add to cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle btn-sm bg-base-300 hover:bg-orange-600 shadow-xl hover:text-white"
            >
              ❮
            </a>

            <a
              href="#slide1"
              className="btn btn-circle btn-sm bg-base-300 hover:bg-orange-600 shadow-xl hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
