import GlobalContext from '../../Provider/GlobalContext'
import contactFormAtters from './Atters/contactFormAtters'
import ContactForm from './ContactForm'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



const ContactFormContainer = () => {
  const {state:{content:{contactForm}}} = useContext(GlobalContext)

  return(
    <Box {...contactFormAtters.contentBox}>
      <Box {...contactFormAtters.titleBox}>
        <Typography {...contactFormAtters.titleText}>
          {contactForm.title}
        </Typography>
      </Box>
      <ContactForm />
    </Box>
  )
}


export default ContactFormContainer;
