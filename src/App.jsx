import { useState, useEffect } from "react";
import "./App.css";
import initialContacts from "./components/Contact/Contact.json";
// import { number } from "yup";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const [newValues, setNewValues] = useState(0);
  // const [newNumber, setNewNumber] = useState(0);

  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(localStorage.getItem("initialContacts"));

    saveContacts ? saveContacts : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewcontact = (newValues, newNumber) => {
    if (!newValues || newNumber) return;
    const newContact = {
      id: crypto.randomUUID(),
      name: newValues,
      number: newNumber,
    };

    setContacts((prev) => {
      const updateContact = [...prev, newContact];
      localStorage.setItem("contacts", JSON.stringify(updateContact));
      return updateContact;
    });
  };

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id))
    // const updateContacts = prev.filter((item) => item.id !== id);
    // localStorage.setItem("contacts", JSON.stringify(updateContacts));
    // return updateContacts;
  };

  return (
    <>
    <ContactForm/>
      <Contact />
      <ContactList/>
    </>
  );
}

export default App;
