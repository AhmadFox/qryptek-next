import tw from 'twin.macro';

const displays = {
  d1: tw`font-secondary text-2xl sm:text-3xl lg:text-4xl xl:text-[3.744vw] min-[1920px]:text-7xl`,
  d2: tw`font-secondary text-6xl`,
  d3: tw`font-secondary text-5xl`,
  d4: tw`font-secondary text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl leading-[1.2]`,
  d5: tw`font-secondary text-3xl`,
  d6: tw`font-secondary text-2xl`,
};

const customTitles = {
  LineThrow: tw`text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-secondary mx-3 text-vaiolet-500 inline-block relative before:w-full before:h-[2px] before:bg-vaiolet-500 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:mt-[4px]`,
  footer: tw`text-orange-500 text-center sm:text-start text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-secondary`,
  services: tw`text-base sm:text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl hover:text-orange-500 font-secondary ease-in-out duration-300`,
  agility: tw`text-dark group-hover:text-orange-500 ease-in-out duration-300 leading-[1]`
};

const subTitles = {
  v1: tw`text-gray-400 capitalize xl:text-2xl font-semibold sm:text-start ml-6 xl:ml-11 mb-4 xl:mb-5`,
  v2: tw`xl:leading-7 text-center md:text-start`,
  v3: tw`text-gray-200 xl:leading-7`,
  v4: tw`xl:leading-7`,
}

export const Title = ({ type = 'h1', display = '', variant = '', children, className }) => {
  const Tag = type;
  return <Tag css={[displays[display], customTitles[variant]]} className={className}>{children}</Tag>;
};

export const SubTitle = ({ variant = '', children, className }) => {
  return <p css={subTitles[variant]} className={className}>{children}</p>;
};

export const Count = ({children, className }) => {
  return <span css={tw`text-gray-400 font-semibold text-sm md:text-base mb-1 2xl:mb-2 3xl:mb-3`} className={className}>{children}</span>;
};