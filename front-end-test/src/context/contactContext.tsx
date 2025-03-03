import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Contact, ContactContextType } from "./contactContext.interface";

const defaultContextValue: ContactContextType = {
  contacts: [],
  modalOpen: false,
  edit: {
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
  },
  isAddMode: true,
  addContact: () => {},
  editContact: () => {},
  removeContact: () => {},
  setModalOpen: () => {},
  setEdit: () => {},
  setIsAddMode: () => {},
};

export const ContactContext =
  createContext<ContactContextType>(defaultContextValue);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const loadContactsFromLocalStorage = (): Contact[] => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  };

  const [contacts, setContacts] = useState<Contact[]>(
    loadContactsFromLocalStorage,
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<Contact>({
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [isAddMode, setIsAddMode] = useState<boolean>(true);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (firstName: string, lastName: string, phone: string) => {
    const newContact: Contact = { id: Date.now(), firstName, lastName, phone };
    setContacts((prev) => [...prev, newContact]);
  };

  const editContact = (
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
  ) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id
          ? { ...contact, firstName, lastName, phone }
          : contact,
      ),
    );
  };

  const removeContact = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        modalOpen,
        edit,
        isAddMode,
        addContact,
        editContact,
        removeContact,
        setModalOpen,
        setEdit,
        setIsAddMode,
      }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  return useContext(ContactContext);
};
