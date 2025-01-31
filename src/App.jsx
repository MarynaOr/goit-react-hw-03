import { useState, useEffect } from "react";
import "./App.css";
import initialContacts from "./components/Contact/Contact.json";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));

    return saveContacts ? saveContacts : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewcontact = (newValues, newNumber) => {
    if (!newValues.trim() || !newNumber.trim()) return;

    const newContact = {
      id: crypto.randomUUID(),
      name: newValues,
      number: newNumber,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <ContactForm addNewcontact={addNewcontact} />
      <Contact />
      <ContactList contacts={contacts} onDeleteContact={deleteContacts} />
    </>
  );
}

export default App;
