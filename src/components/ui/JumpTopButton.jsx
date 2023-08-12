import { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { Angle } from '../icons';

const JumpToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / scrollHeight) * 304;
    setScrollProgress(progress);

    if (scrolled > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-[4] w-12 h-12 flex justify-center items-center bottom-0 bg-dark left-3 md:left-10 rounded-full cursor-pointer elae-in-out duration-300 opacity-0 group
        ${showButton ? 'opacity-100 bottom-10' : 'opacity-0 bottom-0'}
      `}
    >

      <div className="absolute inset-0 flex justify-center items-center before:contect-[''] before:absolute before:inset-0 before:border-[2px] before:border-slate-600 before:rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-light group-hover:stroke-orange-500  z-[1] absolute ease-in-out duration-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    
        <svg className="block align-middle stroke-orange-500 fill-transparent stroke-[4px] border-box ease-linear duration-200 relative z-[2]" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ strokeDasharray: '309', strokeDashoffset: `${scrollProgress + 304}%` }} ></path>
        </svg>
      </div>
      <span className="sr-only">Jumb To Top Button</span>
    </button>
  );
};

export default JumpToTopButton;
