export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface ContactContextType {
  contacts: Contact[];
  addContact: (firstName: string, lastName: string, phone: string) => void;
  editContact: (
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
  ) => void;
  removeContact: (id: number) => void;
}
