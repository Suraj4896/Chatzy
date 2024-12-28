import React, { useEffect, useState } from "react";
import logoImage from "@/assets/logo8.png";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import NewDm from "./components/new-dm/NewDm";
import { apiClient } from "@/lib/api-client";
import { GET_DM_CONTACTS_ROUTES } from "@/utils/constatnts.js";
import ContactList from "@/components/ContactList";
import { useAppStore } from "@/store";

const ContactsContainer = () => {
  const { setDirectMessagesContacts, directMessagesContacts } = useAppStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await apiClient.get(GET_DM_CONTACTS_ROUTES, {
          withCredentials: true,
        });

        if (response.data.contacts) {
          setDirectMessagesContacts(response.data.contacts);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full h-screen overflow-hidden flex flex-col">
      <div className="pt-3">
        <Logo />
      </div>
      <div className="flex-grow overflow-y-auto scrollbar-hidden">
        <Section
          title="Direct Messages"
          action={<NewDm />}
          content={
            isLoading ? (
              <p className="text-neutral-400 text-center">Loading contacts...</p>
            ) : (
              <ContactList contacts={directMessagesContacts || []} />
            )
          }
        />
        <Section title="Groups" content={<p className="text-neutral-400 text-center">No groups available.</p>} />
      </div>
      <ProfileInfo />
    </div>
  );
};

export default ContactsContainer;

const Logo = () => (
  <div className="flex items-center justify-center p-5">
    <img
      src={logoImage}
      alt="Chatzy Logo"
      className="h-auto w-full max-w-sm"
    />
  </div>
);

const Section = ({ title, action, content }) => (
  <div className="my-5">
    <div className="flex items-center justify-between px-6">
      <Title text={title} />
      {action}
    </div>
    <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden px-6 pt-2">
      {content}
    </div>
  </div>
);

const Title = ({ text }) => (
  <h6 className="uppercase tracking-widest text-neutral-400 font-light text-opacity-90 text-sm">
    {text}
  </h6>
);
