/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ImageCard = ({ imageUrl, imageText }) => {
  return (
    <div className="w-full mb-5 rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)] relative">
      <img
        src={imageUrl}
        alt="Image card"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
        <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
          <Link
            to=""
            className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold text-[8px] lg:text-base"
          >
            {imageText}
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ImageCard;
