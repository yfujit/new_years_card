// pages/index.tsx
import React from 'react';
import Image from 'next/image'
import Footer from './Footer';

import { basePath } from "../next.config"
const BASE_PATH = basePath ? basePath : ""

const Home: React.FC = () => {
  return (
    <div className="items-center justify-center bg-gray-100">
      <div className="text-center relative">
        <img
          src={`${BASE_PATH}/happy_new_year_image.png`}
          alt="Happy New Year"
          className="mb-4"
        />
        <div className="absolute bottom-0 right-0 p-4 text-white">
          <h1 className="text-6xl font-bold mb-4">Happy New Year 2024 &nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <p className="text-lg text-white">
          謹んで新年のご挨拶を申し上げます<br />
          昨年はいろいろとお世話になり誠にありがとうございました<br />
          本年も何卒よろしくお願い申し上げます
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
