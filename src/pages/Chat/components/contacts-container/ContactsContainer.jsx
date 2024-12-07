import React from "react";
import logoImage from "@/assets/logo8.png";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import NewDm from "./components/new-dm/NewDm";

const ContactsContainer = () => {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
      <div className="pt-3">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-center pr-10 gap-24">
          <Title text="Direct Messages" />
          <NewDm />
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-center pr-56">
          <Title text="Groups" />
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default ContactsContainer;

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-5 ">
      <img
        src={logoImage}
        alt="Chatzy Logo"
        className="h-auto w-full max-w-sm"
      />
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h6 className="uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm">
      {text}
    </h6>
  );
};
