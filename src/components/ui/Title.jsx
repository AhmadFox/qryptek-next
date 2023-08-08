// components/Title.js
import React from 'react';
import tw from 'twin.macro';

const displays = {
  d1: tw`text-sm   md:text-base xl:text-lg  3xl:text-xl  font-secondary`,
  d2: tw`text-base md:text-lg   xl:text-xl  3xl:text-2xl font-secondary`,
  d3: tw`text-lg   md:text-xl   xl:text-2xl 3xl:text-3xl font-secondary`,
  d4: tw`text-xl   md:text-2xl  xl:text-3xl 3xl:text-4xl font-secondary`,
  d5: tw`text-2xl  md:text-3xl  xl:text-4xl 3xl:text-5xl font-secondary`,
  d6: tw`text-3xl  md:text-4xl  xl:text-5xl 3xl:text-6xl font-secondary`,
  d7: tw`text-4xl  md:text-5xl  xl:text-6xl 3xl:text-7xl font-secondary`,
};

export const Title = ({ display = 'd7', children, className }) => {
  return <p css={displays[display]} className={className}>{children}</p>;
};