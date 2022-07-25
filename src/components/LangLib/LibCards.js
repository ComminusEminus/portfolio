import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import langLibAtters from './Atters/langLibAtters'

import reactrouter from '../common/images/Logos/reactrouter.svg'
import materialui from '../common/images/Logos/materialui.svg'
import  reacttestinglibrary from '../common/images/Logos/reacttestinglibrary.svg'
import graphql from '../common/images/Logos/graphql.svg'
import axios from '../common/images/Logos/axios.svg'
import nodejs from '../common/images/Logos/nodejs.svg'
import expressjs from '../common/images/Logos/expressjs.svg'
import firebase from '../common/images/Logos/firebase.svg'
import webpack from '../common/images/Logos/webpack.svg'

const LibCards = ({cardData}) => {
  return(
    <>
      <Typography {...langLibAtters.imgTitleText} >
        {cardData.title}
      </Typography>
      <Paper {...langLibAtters.paperCard}>
        <img src = {require(`../common/images/Logos/${cardData.imgFile}.svg`)} alt ='svgIcon' style = {{maxWidth:'15vh',maxHeight:'15vh',height:'100%', width: '100%'}}/>
      </Paper>
    </>
  )
}

export default LibCards
