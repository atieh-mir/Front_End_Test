import { useState, useEffect } from "react";
import { useContacts } from "../../context/contactContext"; // دسترسی به Context

export const ContactsModal = () => {
  const { addContact, editContact, edit, setEdit, setModalOpen, isAddMode } =
    useContacts();

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    // اگر حالت ویرایش باشد، مطمئن شویم که مقدارهای ویرایش شده نمایش داده شوند.
    setFormErrors({ firstName: "", lastName: "", phone: "" });
  }, [edit]);

  const validateForm = (firstName: string, lastName: string, phone: string) => {
    const errors: any = {};
    if (firstName.length < 2) errors.firstName = "کمتر از 2 کارکتر مجاز نیست";
    if (lastName.length < 2) errors.lastName = "کمتر از 2 کارکتر مجاز نیست";
    if (phone.length < 11) errors.phone = "شماره تلفن شامل 11 عدد است ";
    return errors;
  };

  const handleSave = () => {
    const errors = validateForm(edit.firstName, edit.lastName, edit.phone);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (isAddMode) {
      addContact(edit.firstName, edit.lastName, edit.phone);
    } else {
      editContact(edit.id, edit.firstName, edit.lastName, edit.phone);
    }

    setModalOpen(false); // بستن مودال بعد از ذخیره
  };

  return (
    <div
      className="modal fixed inset-0 flex justify-center items-center shadow"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
      }}>
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">
          {isAddMode ? "افزودن کاربر" : "ویرایش کاربر"}
        </h2>

        <input
          type="text"
          value={edit.firstName}
          onChange={(e) =>
            setEdit({
              ...edit,
              firstName: e.target.value,
            })
          }
          placeholder="نام"
          className="border p-2 mb-2 w-full rounded-md"
        />
        {formErrors.firstName && (
          <p className="text-red-500 text-sm">{formErrors.firstName}</p>
        )}

        <input
          type="text"
          value={edit.lastName}
          onChange={(e) => setEdit({ ...edit, lastName: e.target.value })}
          placeholder="نام خانوادگی"
          className="border p-2 mb-2 w-full rounded-md"
        />
        {formErrors.lastName && (
          <p className="text-red-500 text-sm">{formErrors.lastName}</p>
        )}

        <input
          type="text"
          value={edit.phone}
          onChange={(e) => setEdit({ ...edit, phone: e.target.value })}
          placeholder="شماره تماس"
          className="border p-2 mb-2 w-full rounded-md"
        />
        {formErrors.phone && (
          <p className="text-red-500 text-sm">{formErrors.phone}</p>
        )}

        <div className="flex justify-between items-center mt-4 ">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:opacity-95 ">
            {isAddMode ? "افزودن" : "ذخیره"}
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:opacity-95 ">
            لغو
          </button>
        </div>
      </div>
    </div>
  );
};
