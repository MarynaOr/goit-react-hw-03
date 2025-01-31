import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts) {
    return <p>not a contact</p>;
  }
  return (
    <ul>
      {contacts.map((item) => (
        <Contact key={item.id} {...item} deleteContacts={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
