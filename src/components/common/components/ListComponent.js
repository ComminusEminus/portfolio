import React, {Fragment} from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import NestedListComponent from './NestedListComponent'


const ListComponent = ({listObject, boxProps}) => {
  console.log(listObject)
  if(listObject){
    return(
      <>
        <Box sx = {{width:'100%'}}>
          <Grid spacing = {4} container>
            {
              listObject.map((item, index) => {
                const {keyVal, title, requirements} = item;

                return(
                  <Fragment key = {`${index}-${item.keyVal}`}>
                    <Grid xs = {12} lg = {4} sx ={{}} item>
                      <Paper elevation = {5} sx = {{ height:'100%',p:2,boxSizing:'border-box', borderRadius: 7, borderColor:'custom.darkgrey'}}>
                        <Box sx = {{px:2, display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
                          <Typography variant = 'bodyFont' sx = {{fontWeight: 800, fontSize: {xs: 30,lg:22}, color: 'custom.darkgrey'}}>
                            {title}
                          </Typography>
                        </Box>
                        <Box sx = {{}}>
                          <List>
                            <NestedListComponent list = {requirements} keyVal = {item.keyVal} />
                          </List>
                        </Box>
                      </Paper>
                    </Grid>
                  </Fragment>
                )
              })
            }
          </Grid>
        </Box>
      </>
    )
  }else{
    return(
      <h1>...Loading</h1>
    )
  }
}

/*

*/

export default ListComponent;
