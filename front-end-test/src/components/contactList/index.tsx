import { ContactsListUser } from "../contactsListUser";
import { ContactsModal } from "../contactsModal";
import { useContacts } from "../../context/contactContext";

export const ContactList = () => {
  const { setEdit, setModalOpen, setIsAddMode, modalOpen } = useContacts();

  const handleAddNewContact = () => {
    setEdit({
      id: 0,
      firstName: "",
      lastName: "",
      phone: "",
    });
    setModalOpen(true);
    setIsAddMode(true);
  };

  return (
    <div className="container w-full mt-4 mx-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4 underline">لیست کاربران</h2>
        <button
          onClick={handleAddNewContact}
          className="bg-green-600 text-white px-4 py-2 mb-4 rounded-2xl hover:opacity-90">
          افزودن کاربر جدید
        </button>
      </div>
      <ContactsListUser />

      {modalOpen && <ContactsModal />}
    </div>
  );
};
