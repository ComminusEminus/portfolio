import * as yup from 'yup';

const contactFormSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required(),
  business: yup
    .string()
    .trim(),

  phone: yup
    .number(),

  email: yup
    .string()
    .email('Please Enter a Valid Email')
    .trim()
    .required(),
  message: yup
    .string()
    .trim()
    .required(),
})

export default contactFormSchema;
