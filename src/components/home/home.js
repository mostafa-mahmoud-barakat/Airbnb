import React  from 'react';
import { useSelector } from 'react-redux';
import Box, { BoxProps } from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { positions } from '@mui/system';
// import { spacing } from '@mui/system';/
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';


function Item(props:BoxProps ) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Home() {
  const { t } = useTranslation();

  var dataDetails = useSelector((state)=>state.requestDetail.details);
  console.log(dataDetails)

  return (
<>   
                  <Grid container>
                        <Grid item xs={12}>
                            <Box  p={2}> 
                            <h1>{dataDetails.description}</h1>
                            </Box>
                        </Grid>
                    </Grid>

                  <Grid container>
                        <Grid item xs={10}>
                            <Box style={{ textDecoration:'underLine'}} sx={{ mb: 2 }} p={2}> 
                            <StarIcon/>4.71.43{t("reviews")} . {dataDetails.address}
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box> 
                            <span> <IosShareIcon/>{t("share")} </span>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box> 
                            <span> <FavoriteBorderIcon/> {t("save")} </span>

                            </Box>
                        </Grid>
                    </Grid>



        <div style={{ width: '100%' }} >
              <Box
                sx={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gridTemplateRows: 'repeat(2, 200px)',
                  // gap: 1,
                }}
              >
                 <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}><img width='500px' height='380px' src={dataDetails.Url}/></Item>
                 <Item><img width='300px' height='180px' alt='image' src={dataDetails.Url2}/></Item>
                 <Item><img width='300px' height='180px' alt='image' src={dataDetails.Url3}/></Item>
                 <Item><img  width='300px' height='180px' alt='image' src={dataDetails.Url4}/></Item>
                 <Item><img width='300px' height='180px' alt='image' src={dataDetails.Url5}/></Item>
              </Box>
            </div>
      
    </>
  )
}



