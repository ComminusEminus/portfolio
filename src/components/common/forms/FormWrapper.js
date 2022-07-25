import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

import React from 'react'


const FormWrapper = ({formUI, ...props}) => {
  const {formik} = formUI(props)

  if(formik){
    return (
      <>
        <form onSubmit = {formik.handleSubmit}>
          {
            React.Children.map(props.children, (child, index) => {
              return React.cloneElement(child, {formik, index})
            })
          }
        </form >
      </>
    )
  }else{
    return(
      <h1>...Loading</h1>
    )
  }
}

export default FormWrapper;
