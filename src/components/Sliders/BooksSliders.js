  import React, { Component } from 'react';
import Slider from 'react-slick';import { BookContext } from '../../Context/BookContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 import { Box, Stack, Typography, Grid} from '@mui/material'
class BooksSliders extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1
  
    };
    
    return (
      <div style={{height:'16rem',}} className="container-fluid">
        <div className='title-box'>
            <h3>Books</h3>
            <div style={{marginLeft:"42%"}} className='under-line  col-2'></div>
        </div>
        
        <Grid container justifyContent="center">

        <Stack direction="row" flexWrap="wrap" spacing={9} mt={4}>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
 backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            
        
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
          
          </Stack>
          <Stack direction="row" flexWrap="wrap" spacing={9}>
          <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            
        
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
            <Box
              sx={{
                height: "230px",
                width: "175px",
                border: "2px solid #828282",
                background: "#FFFFFF",
                // padding: "20px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "170px",
                  border: "2px solid #ffffff",
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxWucfsf9kc59oR6n3Zqi6CSLdK90i0N9Qw&usqp=CAU ")`,
                  // p: 1,
              
                }}
              >  
</Box>
              <Typography variant="subtitle1" ml={1}  >
Red white royal blue
              </Typography>
            </Box>
          </Stack>
          </Grid>

      
 
          </div>

    );
  }
}

export default BooksSliders;