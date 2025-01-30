
// import ContactItem from './ContactItem.jsx';
// import { number } from "yup";
// import Contact from "./Contact.json";

const ContactList = ({  id, name, number, onDeleteContact }) => {


    return(
        <li >
            {/* <input type="checkbox" /> */}
            <span> {name} </span>
            <span> {number} </span>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    )

}



export default ContactList;



