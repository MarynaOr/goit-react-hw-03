import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContacts }) => {
  if (!contacts) {
    return <p>not a contact</p>;
  }
  return (
    <ul>
      {contacts.map((item) => {
        <Contact key={item.id} {...item} onDeleteContct={deleteContacts} />;
      })}
    </ul>
  );
};

export default ContactList;

// // import ContactItem from './ContactItem.jsx';
// // import { number } from "yup";
// // import Contact from "./Contact.json";
// // import ContactForm from '../ContactForm/ContactForm.jsx';

// const ContactList = ({  id, name, number, onDeleteContact }) => {

//     return(
//         <li >
//             {/* <input type="checkbox" /> */}
//             <span> {name} </span>
//             <span> {number} </span>
//             <button onClick={() => onDeleteContact(id)}>Delete</button>
//         </li>
//     )

// }

// export default ContactList;
