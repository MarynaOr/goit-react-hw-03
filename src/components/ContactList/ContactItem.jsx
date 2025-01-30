import { useEffect, useState } from "react";
// import Contact from "./Contact.json";
import ContactList from "./ContactList";
import ContactForm from "../ContactForm/ContactForm";
// import { number } from "yup";


const ContactItem = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
   return saveContacts ? saveContacts : [];
  });

//   const [newValues, setNewValues] = useState("");
//   const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addNewcontact = (newValues, newNumber) => {
if(!newValues || !newNumber)return;

    const newContact = {
      id: crypto.randomUUID(),
      name: newValues,
      number: newNumber,
    };

    setContacts((prev) => {
        const updateContact = [...prev, newContact];
        localStorage.setItem('contacts', JSON.stringify(updateContact))
        return updateContact
    })

    // setContacts((prev) => {
    //     const 
    // })
        
    //     [...prev, newContact]);
    // localStorage.setItem('contacts', JSON.stringify(newContact))
    // return newContact;

  
  };

  return (
    <div>
        <ContactForm onAddContact={addNewcontact}/>
      <ul>
        {contacts.map(item => (
           <ContactList key={item.id} {...item} onDeleteContact={deleteContacts} /> 
        ))}
      </ul>
    </div>
  );
};

export default ContactItem;
