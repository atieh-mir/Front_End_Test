import { useState } from "react";
import { ContactProvider } from "../../context/contactContext";
import { Sidebar } from "../sidebar";
import { ContactList } from "../contactList";

export const Contacts = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="flex items-center gap-6">
      <Sidebar index={index} setIndex={setIndex} />

      <div className="bg-[#FFF5E4] w-[78%] min-h-[94vh] text-black rounded-2xl shadow-xl flex  justify-center">
        {index === 1 ? (
          <ContactProvider>
            <ContactList />
          </ContactProvider>
        ) : (
          <h1 className="my-auto text-3xl font-bold">
            مجوز دسترسی به این بخش را ندارید
          </h1>
        )}
      </div>
    </div>
  );
};
