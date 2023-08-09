// components/Title.js
import React from 'react';
import tw from 'twin.macro';

const titles = {
  LineThrow: tw`text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-secondary mx-3 text-vaiolet-500 inline-block relative before:w-full before:h-[2px] before:bg-vaiolet-500 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:mt-[4px]`,
  footer: tw`text-orange-500 text-center sm:text-start text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-secondary`,
  services: tw`text-base sm:text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl hover:text-orange-500 font-secondary ease-in-out duration-300`,
};

const subTitles = {
  v1: tw`block text-gray-400 capitalize xl:text-2xl font-semibold sm:text-start ml-6 xl:ml-11 mb-4 xl:mb-5`,
  v2: tw`block text-gray-200 xl:leading-7 text-center md:text-start`,
  v3: tw`block text-gray-200 xl:leading-7`
}

export const Title = ({ display = 'd7', children, className }) => {
  return <p css={titles[display]} className={className}>{children}</p>;
};


export const SubTitle = ({ variant = 'v1', children, className }) => {
  return <p css={subTitles[variant]} className={className}>{children}</p>;
};

export const Count = ({children, className }) => {
  return <span css={tw`text-gray-400 font-semibold text-sm md:text-base mb-1 2xl:mb-2 3xl:mb-3`} className={className}>{children}</span>;
};