// pages/index.tsx
import React from 'react';
import Image from 'next/image'
import Footer from './Footer';

import { basePath } from "../next.config"
const BASE_PATH = basePath ? basePath : ""

const Home: React.FC = () => {
  return (
    <div className="items-center justify-center bg-white" id="wrapper">
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
      <div className="mt-8 text-4xl font-bold text-gray-800">
        Concepts
        <div className="h-1 bg-gray-800 mt-2"></div>
      </div>
      <div className="mt-12 flex items-center">
        <div className="ml-4 text-center">
          <p className="text-gray-700">
            The concept for this year's New Year's card is <strong>"Copilot."</strong><br />
            All the code and images for this product has been created by AI.<br />
            May our dreams come true in a magical world where envisioning leads to greater strength and accuracy.<br />
            Wishing that each of you achieves as much as possible with AI.
          </p>
        </div>
      </div>

      <div className="mt-8 text-4xl font-bold text-gray-800">
        Technologies
        <div className="h-1 bg-gray-800 mt-2"></div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md mx-4">
          <img
            src={`${BASE_PATH}/nextjs_logo.png`}
            alt="NextJS"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="https://nextjs.org/" target="_blank" className="block">
              <h2 className="text-xl font-semibold mb-2">NextJS</h2>
            </a>
            <p className="text-gray-700">
             This web page utilizes Next.js for its frontend. Almost all configurations are set to default values. 
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md mx-4">
          <img
            src={`${BASE_PATH}/midjourney_logo.png`}
            alt="Midjourney"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="https://www.midjourney.com/" target="_blank" className="block">
              <h2 className="text-xl font-semibold mb-2">Midjourney</h2>
            </a>
            <p className="text-gray-700">
              All images on this website, excluding the logo, have been generated by Midjourney. We commissioned the creation of several hundred illustrations.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md mx-4">
          <img
            src={`${BASE_PATH}/chatgpt_logo.png`}
            alt="ChatGPT"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="https://openai.com/chatgpt" target="_blank" className="block">
              <h2 className="text-xl font-semibold mb-2">ChatGPT</h2>
            </a>
            <p className="text-gray-700">
              All code on this website is written by ChatGPT. I merely conveyed the ideas to it and made minor adjustments.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md mx-4">
          <img
            src={`${BASE_PATH}/github_pages_logo.png`}
            alt="Github Pages"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <a href="https://pages.github.com/" target="_blank" className="block">
              <h2 className="text-xl font-semibold mb-2">Github Pages</h2>
            </a>
            <p className="text-gray-700">
              This website is hosted on GitHub Pages and is automatically built and deployed using GitHub Actions.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
       <Footer />
      </div>
    </div>
  );
};

export default Home;
