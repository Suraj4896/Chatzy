import React from 'react'

const ContactsContainer = () => {
  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full'>
      <div className='pt-3'>
        <Logo />
      </div>
      <div className='my-5'>
        <div className='flex items-center justify-center pr-10'>
          <Title text="Direct Messages" />
        </div>
      </div>
      <div className='my-5'>
        <div className='flex items-center justify-center pr-10'>
          <Title text="Groups" />
        </div>
      </div>
    </div>
  )
}

export default ContactsContainer;




const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {/* Circle logo with network design */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="mb-2"
      >
        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" fill="none" />
        <g fill="white">
          <circle cx="30" cy="30" r="2" />
          <circle cx="70" cy="30" r="2" />
          <circle cx="50" cy="50" r="2" />
          <circle cx="30" cy="70" r="2" />
          <circle cx="70" cy="70" r="2" />
        </g>
        <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
        <line x1="50" y1="50" x2="70" y2="70" stroke="white" strokeWidth="1" />
        <line x1="30" y1="70" x2="50" y2="50" stroke="white" strokeWidth="1" />
        <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
      </svg>

      {/* Chatzy text */}
      <span className="text-4xl font-bold text-white">Chatzy</span>

      {/* Tagline */}
      <span className="text-sm text-gray-300">Seamless Conversations.</span>
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h6 className='uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>
      {text}
    </h6>
  )
};


