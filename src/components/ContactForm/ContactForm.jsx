import { Field, Formik } from "formik"
import { useId } from "react"






const initialValues = {
    username: '',

}

const ContactForm = () => {

const nameFieldId = useId()




return(
    <Formik
    initialValues={initialValues}
    >
        <form>
            <div>
                <label htmlFor={nameFieldId}>Name</label>
                < Field type='text' name='username' id={nameFieldId} />

            </div>
            

            <button type="submit">Add contact</button>
        </form>
    </Formik>
)
}



export default ContactForm