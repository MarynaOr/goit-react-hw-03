import { useEffect, useState } from "react";
import Contact from "./Contact.json";
import ContactList from "./ContactList";
import { number } from "yup";

const ContactItem = () => {
  const [contacts, setcontacts] = useState(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!saveContacts) {
      return [];
    }
    return saveContacts;
  });

  const [newValues, setNewValues] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = (id) => {
    setcontacts((prev) => prev.filter((item) => item.id === id));
  };

  const addNewcontact = () => {
    const newContact = {
      id: crypto.randomUUID(),
      name: newValues,
      number: newNumber,
    };
    setcontacts((prev) => [...prev, newContact]);
  };

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default ContactItem;
