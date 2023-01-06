import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function  FooterDet() {


  return (
        <>  
        <Grid container style={{marginTop:'20px', paddingBottom:'35px',  borderBottom:'1px solid lightgray' }}>
            <Grid item xs={3}>
             <Box   > 
               <h4>Support</h4>
               <p>Help Center</p>
               <p>AirCover</p>
               <p>Safety information</p>
               <p>Supporting people with disabilities</p>
               <p>Cancellation options</p>
               <p>Our COVID-19 Response</p>
               <p>Report a neighborhood concern</p>
              </Box>
            </Grid>
            <Grid item xs={3}>
                <Box >
                <h4>Community</h4>
               <p>Airbnb.org: disaster relief housing</p>
               <p>Support Afghan refugees</p>
               <p>Combating discrimination</p>
                </Box>
            </Grid>       
            <Grid item xs={3}>
                <Box >
                <h4>Hosting</h4>
               <p>Try hosting</p>
               <p>AirCover for Hosts</p>
               <p>Explore hosting resources</p>
               <p>Visit our community forum</p>
               <p>How to host responsibly</p>
                </Box>
            </Grid>       
            <Grid item xs={3}>
                <Box >
                <h4>Airbnb</h4>
                <div>
               <p>Newsroom</p>
               <p>AirCover for Hosts</p>
               <p>Learn about new features</p>
               <p>Letter from our founders</p>
               <p>Careers</p>
               <p>Investors</p>
               <p>Gift cards</p>
               </div>
                </Box>
            </Grid>       
        </Grid> 


            </>
  )
}