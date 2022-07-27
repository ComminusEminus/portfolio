import { useState } from 'react'
import { useFormik } from 'formik';
import contactFormSchema from '../contactFormSchema'
import emailjs from '@emailjs/browser';

const useContactFormHook = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messageTitle, setMessageTitle] = useState('')
  const handleClose = () => {
    setOpen(false)
  }
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
      emailjs.send(process.env.REACT_APP_SERVICE_ID,"contact_form", values, process.env.REACT_APP_PUBLIC_KEY)
        .then((result)=>{
          setMessage('Thank you for your interest. I look forward to working with you.')
          setMessageTitle('Your Message Has Been Sent!')
          setOpen(true)
        }).catch((error)=> {
          setMessage('Please fill out the form and try again')
          setMessageTitle('An Error Has Occurred!')
          setOpen(true)
        })
      action.resetForm()
      action.setSubmitting(false)
    },
  })
  return {formik, handleClose, message, messageTitle, open}
}

export default useContactFormHook
