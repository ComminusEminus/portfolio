import LibCards from './LibCards'
import Grid from '@mui/material/Grid'


const MapLang = ({content}) => {
  return(
    <>
      {
        content.map((card) => {
          return(
            <Grid item xs = {4} lg ={2} key = {`${card.title}-langLib-card`} sx ={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <LibCards cardData = {card} />
            </Grid>
          )
        })
      }
    </>
  )
}

export default MapLang;
