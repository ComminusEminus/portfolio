import SelectOptionComponent from '../../index';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import contactFormAtters from './Atters/contactFormAtters'

const ContactFields = (props) => {
  return(
    <>
      <TextField
        id = {'name'}
        name = {'name'}
        label= {'Name'}
        value = {props.formik.values.name}
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.name && Boolean(props.formik.errors.name)}
        helperText = {props.formik.touched.name && props.formik.errors.name}
        sx = {contactFormAtters.inputTextFieldProps}
        InputProps = {contactFormAtters.inputProps}
        InputLabelProps = {contactFormAtters.inputLabelProps}
      />
      <TextField
        key = {`${props.index}-business-key`}
        id = {'business'}
        name = {'business'}
        label= {'Business Name'}
        value = {props.formik.values.business }
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.business && Boolean(props.formik.errors.business)}
        helperText = {props.formik.touched.business && props.formik.errors.business}
        sx = {contactFormAtters.inputTextFieldProps}
        InputProps = {contactFormAtters.inputProps}
        InputLabelProps = {contactFormAtters.inputLabelProps}
      />
      <TextField
        key = {`${props.index}-phone-key`}
        id = {'phone'}
        name = {'phone'}
        label= {'Phone Number'}
        value = {props.formik.values.phone }
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.phone && Boolean(props.formik.errors.phone)}
        helperText = {props.formik.touched.phone && props.formik.errors.phone}
        sx = {contactFormAtters.inputTextFieldProps}
        InputProps = {contactFormAtters.inputProps}
        InputLabelProps = {contactFormAtters.inputLabelProps}
      />
      <TextField
        key = {`${props.index}-email-key`}
        id = {'email'}
        name = {'email'}
        label= {'Email'}
        value = {props.formik.values.email }
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.email && Boolean(props.formik.errors.email)}
        helperText = {props.formik.touched.email && props.formik.errors.email}
        sx = {contactFormAtters.inputTextFieldProps}
        InputProps = {contactFormAtters.inputProps}
        InputLabelProps = {contactFormAtters.inputLabelProps}
      />
      <TextField
        key = {`${props.index}-message-key`}
        InputProps={{ style:  {fontSize:{xs:40, lg:20} }}}
        InputLabelProps = {{ style: {fontSize:{xs:40, lg:20} }}}
        id = {'message'}
        name = {'message'}
        label= {'Brief Description of Project'}
        value = {props.formik.values.message }
        onChange = {props.formik.handleChange}
        error = {props.formik.touched.message && Boolean(props.formik.errors.message)}
        helperText = {props.formik.touched.message && props.formik.errors.message}
        sx = {contactFormAtters.inputTextFieldProps}
        InputProps = {contactFormAtters.messageInputProps}
        InputLabelProps = {contactFormAtters.inputLabelProps}
      />
    </>
  )
}

export default ContactFields;
