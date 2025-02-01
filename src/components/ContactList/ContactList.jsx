import Contact from "../Contact/Contact";
import s from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts) {
    return <p>not a contact</p>;
  }
  return (
    <ul className={s.item}>
      {contacts.map((item) => (
        <Contact key={item.id} {...item} deleteContacts={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
