import s from './Contact.module.css'

const Contact = ({ id, name, number, deleteContacts }) => {
  return (
    <div className={s.container}>
      <span className={s.span}> {name} </span>
      <a href={`tel:${number}`}  className={s.link}> {number} </a>
      <button className={s.btn} type="button" onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
