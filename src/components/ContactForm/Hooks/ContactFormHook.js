import { useFormik } from 'formik';
import contactFormSchema from '../contactFormSchema'
import emailjs from '@emailjs/browser';

const useContactFormHook = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      business: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, action) => {
      action.setSubmitting(false)
      emailjs.send("service_tcniwgh","contact_form", values, "atsUynv_7-81bIL3r")
        .then((result)=>{
          console.log('sent')
          console.log(result.text)
        }).catch((error)=> {
          console.log('notsent')
          console.log(error.text)
        })
    },
  })
  return {formik}
}


export default useContactFormHook
