// pages/index.tsx
import React from 'react';
import Image from 'next/image'
import Footer from './Footer';

import { basePath } from "../next.config"
const BASE_PATH = basePath ? basePath : ""

const Home: React.FC = () => {
  return (
    <div className="items-center justify-center bg-black">
      <div className="text-center relative">
        <img
          src={`${BASE_PATH}/happy_new_year_image.png`}
          alt="Happy New Year"
          className="mb-4"
        />
        <div className="absolute bottom-0 right-0 p-4 text-white text-center">
            <h1 className="sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold">
              Happy New Year 2024 !!
            </h1>
        <p className="text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl ">
          謹んで新年のご挨拶を申し上げます<br />
          昨年は大変お世話になり誠にありがとうございました<br />
          本年も何卒よろしくお願い申し上げます
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
