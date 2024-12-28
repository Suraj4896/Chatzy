import { useAppStore } from "@/store";
import { Avatar, AvatarImage } from "./ui/avatar";
import { HOST } from "@/utils/constatnts";
import { getColor } from "@/lib/utils";

const ContactList = ({ contacts, isChannel = false }) => {
  const {
    selectedChatData,
    setSelectedChatData,
    setSelectedChatType,
    selectedChatType,
    setSelectedChatMessages,
  } = useAppStore();

  const handleClick = (contact) => {
    if (isChannel) {
      setSelectedChatType("channel");
    } else {
      setSelectedChatType("contact");
    }
    setSelectedChatData(contact);
    if (selectedChatData && selectedChatData._id !== contact._id) {
      setSelectedChatMessages([]);
    }
  };

  return (
    <div className="mt-5">
      {contacts.map((contact) => (
        <div
          key={contact._id}
          className={`pl-5 pr-5 py-3 transition-all duration-300 cursor-pointer flex items-center ${
            selectedChatData && selectedChatData._id === contact._id
              ? "bg-[#8417ff] hover:bg-[#8417ff]"
              : "hover:bg-[#f1f1f111]"
          }`}
          onClick={() => handleClick(contact)}
        >
          {!isChannel && (
            <Avatar className="h-12 w-12 rounded-full overflow-hidden">
              {contact.image ? (
                <AvatarImage
                  src={`${HOST}/${contact.image}`}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`${
                    selectedChatData && selectedChatData._id === contact._id
                      ? "bg-[#ffffff22] border border-white/70"
                      : getColor(contact.color)
                  } uppercase h-full w-full text-lg border-[1px] flex items-center justify-center rounded-full`}
                >
                  {contact.firstName
                    ? contact.firstName.charAt(0)
                    : contact.email.charAt(0)}
                </div>
              )}
            </Avatar>
          )}
          {isChannel && (
            <div className="bg-[#ffffff22] h-12 w-12 flex items-center justify-center rounded-full">
              #
            </div>
          )}
          <div className="ml-4 flex-grow">
            {isChannel ? (
              <span className="text-neutral-300 text-base font-semibold">
                {contact.name}
              </span>
            ) : (
              <span className="text-neutral-300 text-base font-semibold">
                {`${contact.firstName} ${contact.lastName}`}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
