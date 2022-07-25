import ContactFields from './ContactFields'
import useContactFormHook from './Hooks/ContactFormHook'
import contactFormAtters from './Atters/contactFormAtters'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ContactForm = () => {
  const {formik} = useContactFormHook()
  return(
    <>
      <Box {...contactFormAtters.formBox}>
        <form onSubmit = {formik.handleSubmit}>
          <ContactFields formik = {formik} />
          <Button {...contactFormAtters.submitFormButton}>
            Submit
          </Button>
        </form >
      </Box>
    </>
  )
}

export default ContactForm;
