import React from 'react';
import tw from 'twin.macro';

const headings = {
  h1: tw`font-secondary text-2xl sm:text-3xl lg:text-4xl xl:text-[3.744vw] min-[1920px]:text-7xl`,
  h2: tw`font-secondary text-6xl`,
  h3: tw`font-secondary text-5xl`,
  h4: tw`font-secondary text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl leading-[1.2]`,
  h5: tw`font-secondary text-3xl`,
  h6: tw`font-secondary text-lg`,
};

export const Heading = ({ variant = 'h1', children, className }) => {
  const HeadingTag = variant;
  return <HeadingTag css={headings[variant]} className={className}>{children}</HeadingTag>;
};