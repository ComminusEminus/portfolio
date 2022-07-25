import GlobalContext from '../../Provider/GlobalContext'
import ContentSection from '../common/ComponentsNew/ContentSection'
import contactFormAtters from './Atters/contactFormAtters'
import ContactForm from './ContactForm'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



const ContactFormContainer = () => {
  const {state:{content:{contactForm}}} = useContext(GlobalContext)
  console.log(contactForm.title)
  return(
    <Box {...contactFormAtters.contentBox}>
      <Box {...contactFormAtters.titleBox}>
        <Typography {...contactFormAtters.titleText}>
          {contactForm.title}
        </Typography>
        <Typography {...contactFormAtters.subTitle}>
          {contactForm.subtitle}
        </Typography>
      </Box>
      <ContactForm />
    </Box>
  )
}


export default ContactFormContainer;
