import ContactFields from './ContactFields'
import useContactFormHook from './Hooks/ContactFormHook'
import contactFormAtters from './Atters/contactFormAtters'
import DialogMessage from '../Dialog/DialogMessage'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ContactForm = () => {
  const {formik, handleClose, message, messageTitle, open} = useContactFormHook()

  return(
    <>
    {
      formik && <Box sx={{width:{xs:"80%",md:'80%',lg:'50%'}}}>
        <form onSubmit = {formik.handleSubmit}>
          <Box sx={{width:{xs:'100%', md:'100%', lg:'80%'},display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <ContactFields formik = {formik} />
            <Button type = 'submit' {...contactFormAtters.submitFormButton}>
              Submit
            </Button>
          </Box>
        </form >
        <DialogMessage handleClose = {handleClose} message = {message} messageTitle = {messageTitle} open = {open} />
      </Box>

    }
    {
      !formik && <h1>...Loading</h1>
    }
    </>
  )
}

export default ContactForm;
