import { Field, Formik } from "formik"
import { useId } from "react"






const initialValues = {
    username: '',
    phone: '',
}

const ContactForm = () => {

const nameFieldId = useId()
const phoneFieldId =useId()



return(
    <Formik
    initialValues={initialValues}
    >
        <form>
            <div>
                <label htmlFor={nameFieldId}>Name</label>
                < Field type='text'
                 name='username'
                  id={nameFieldId}
                  
                  />

            </div>
            <div>
                <label htmlFor="phoneFieldId">Number</label>
                < Field
                 type='tel' 
                name='phone'
                 id={phoneFieldId} 
                 />

            </div>

            <button type="submit">Add contact</button>
        </form>
    </Formik>
)
}



export default ContactForm