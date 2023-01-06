import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import VapeFreeIcon from '@mui/icons-material/VapeFree';
import UpdateDisabledIcon from '@mui/icons-material/UpdateDisabled';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SatelliteRoundedIcon from '@mui/icons-material/SatelliteRounded';
import Link from '@mui/material/Link';


export default function UperFooter() {


  return (
        <>  
         <Grid container style={{marginTop:'20px'}}>
            <Grid item xs={1}>
             <Box > 
               <Avatar alt='ff' style={{marginTop:'20px'}}  src='https://a0.muscache.com/im/pictures/user/2a756356-b9ac-463e-935f-c292210f4458.jpg?im_w=240'/>

              </Box>
            </Grid>
              <Grid item xs={3}>
                <Box >
                    <h4>Hosted by The Arctic Hideaway</h4>
                    <p>Joined in February 2022</p>
                </Box>
              </Grid>       
            </Grid> 


            <Grid container  style={{marginBottom:'30px', paddingBottom:'35px',borderBottom:'1px solid lightgray'}}>
            <Grid item xs={6}>
             <Box > 
               <p><span><StarIcon/>40 Reviews</span>
               <span style={{marginLeft:'20px'}}><VerifiedUserIcon/>Identity Verified</span>
               <span style={{marginLeft:'20px'}}><VolunteerActivismIcon/>Superhost</span>
               </p>
               <p>Welcome to the Arctic Hideaway, a very special cluster of 
                tiny houses the arctic norwegian archipelago Fleinvær, outside city Bodø.</p>
                <h4>During your stay</h4>
                <p>There are two caretakers who lives among the cabins and shares the space with the guests. 
                  The caretaker is necessary for keeping The Arctic Hideaway running smoothly as offering</p>

                <h4>The Arctic Hideaway is a Superhost</h4>
                <p>Superhosts are experienced,
                   highly rated hosts who are committed to providing great stays for guests.</p>

              </Box>
            </Grid>
              <Grid item xs={6} >
                <Box style={{marginLeft:'100px'}}>
                    <p style={{fontSize:'20px'}}>Languages: Dansk, English, Norsk, Svenska</p>
                    <p style={{fontSize:'20px'}}>Response rate: 98%</p>
                    <p style={{fontSize:'20px'}}>Response time: within a few hours</p>
                    <p style={{ width:'100px',fontWeight:'bold', fontSize: 15, border:'1px solid black', padding:10, borderRadius:10, marginLeft:20}}> Contact Host </p>

                <Grid container >
                      <Grid item xs={1}>
                      <Box > 
                      <PrivacyTipIcon style={{marginTop:'25px', fontSize:'40px'}}/>
                        
                        </Box>
                      </Grid>
                        <Grid item xs={10} >
                          <Box  >
                                <p style={{marginLeft:'10px' }} >To protect your payment, 
                              never transfer money or communicate outside of the Airbnb website or app.</p>  
                          </Box>
                        </Grid>       
                </Grid>    

                </Box>
              </Grid>       
            </Grid> 


            <Grid container >
                      <Grid item xs={12}>
                      <Box > 
                      <h2>Things to know</h2>
                        </Box>
                      </Grid>       
                </Grid>    


            <Grid container style={{borderBottom:'1px solid lightgray', marginBottom:'20px', paddingBottom:'35px'}}>
                      <Grid item xs={4}>
                      <Box > 
                      <h3>House rules</h3>
                      <p><span><WatchLaterIcon style={{marginRight:'10px' }}/> Check-in:Flexible</span></p>
                      <p><span><IndeterminateCheckBoxIcon style={{marginRight:'10px' }}/>Checkout:12.00 PM</span></p>
                      <p><span><CancelIcon style={{marginRight:'10px' }}/>Self Check-in with building staff</span></p>
                      <p><span><AlarmOffIcon style={{marginRight:'10px' }}/>Not suitable fir infants(Under 2 years)</span></p>
                      <p><span><SpatialTrackingIcon style={{marginRight:'10px' }}/>No smoking </span></p>
                      <p><span><UpdateDisabledIcon style={{marginRight:'10px' }}/>No parties or events</span></p>
                      <p><span><VapeFreeIcon style={{marginRight:'10px' }}/>Smoke alarm</span></p>
                      <Link style={{ color:'black', textDecoration:'underLine', fontWeight:'bold' }} href="#">Show more</Link>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                      <Box > 
                      <h3>Health & Safety</h3>
                      <p><span><AutoAwesomeIcon style={{marginRight:'10px' }}/>Airbnb's COVID-19 safety practices apply</span></p>
                      <p><span><HelpOutlinedIcon style={{marginRight:'10px' }}/>Carbon monoxide alarm not reported</span></p>
                      <p><span><SatelliteRoundedIcon style={{marginRight:'10px' }}/>Pets are allowed</span></p>
                      <Link href="#" style={{ color:'black', textDecoration:'underLine', fontWeight:'bold' }}>Show more</Link>
                        </Box>
                      </Grid>
                        <Grid item xs={4} >
                          <Box  >
                          <h3>Cancellation Policy</h3>
                          <p>Add your trip dates to get the cancellation details for this stay.</p>
                          <Link href="#" style={{ color:'black', textDecoration:'underLine', fontWeight:'bold' }}>Add dates</Link>
                          </Box>
                        </Grid>       
                </Grid>    
              
      



    </>
  )
}









