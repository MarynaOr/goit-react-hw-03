const Contact = ({ id, name, number, deleteContacts }) => {
  return (
    <div>
      <span> {name} </span>
      <span> {number} </span>
      <button type="button" onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
