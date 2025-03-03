import { useContacts } from "../../context/contactContext";
import { Contact } from "../../context/contactContext.interface";

export const ContactsListUser = () => {
  const { contacts, removeContact, setEdit, setModalOpen, setIsAddMode } =
    useContacts();

  const handleEdit = (contact: Contact) => {
    setEdit({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
    });
    setModalOpen(true);
    setIsAddMode(false);
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="flex justify-between items-center mb-2 p-2 border">
          <span>
            <span className="text-xs text-gray-400 italic"> کاربر:</span>
            {contact.lastName}- {contact.firstName}{" "}
            <span className="text-gray-200"> - </span>
            <span className="text-xs text-gray-400 "> تلفن:</span>{" "}
            {contact.phone}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(contact)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
              ویرایش
            </button>
            <button
              onClick={() => removeContact(contact.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
              حذف
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
