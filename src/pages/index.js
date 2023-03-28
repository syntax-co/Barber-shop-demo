
import {useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import HomeSlide from './components/HomepageSlide';
import Booking from './book';


const DayHours = ({day, hours}) => {

  return(
    <Box sx={{
      width:'100%',
      height:'50px',
      display:'flex',
      fontSize:'calc(12px + .8vw)',
      fontFamily:'raleway',
      marginTop:'2%'
    }}>
      <Typography sx={{
        width:'50%',
        fontSize:'calc(20px + .8vw)',
        display:'flex',
        alignItems:'center',
        fontFamily:'raleway'
      }}>
        {day}
      </Typography>
      
      <Box sx={{
        width:'50%',
        height:'100%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
      }}>
        {hours}
      </Box>
    </Box>
  )
}



const ServicePrice = ({title, price}) => {

  return(
    <Box sx={{
      width:'100%',
      display: 'flex',
      height:'70px',
      display:'flex',
      alignItems:'center'
    }}>

      <Box sx={{
        width:'50%',
        fontSize:'25px',
        fontWeight:'bold'
      }}>
        {title}
      </Box>

      <Box sx={{
        width:'50%',
        display:'flex',
        justifyContent:'flex-end'
      }}>
        {price}
      </Box>
    </Box>
  )
}



export default function Home() {


  const windowLim = 1000;
    const [smallscreen, setSmallscreen] = useState(false);

    const handleresize = (event) => {
        const currentSize = window.innerWidth;

        
        if (currentSize<windowLim) {
          setSmallscreen(true);
        } else {
          setSmallscreen(false);
        }
        

    }



    useEffect(() => {
        handleresize();
        window.addEventListener('resize',handleresize)


        return () => {
            window.removeEventListener('resize',handleresize);
        }
    },[])





  return (
    <Box sx={{
      width:'100%',
      height:'100vh',
      
    }}>
      {/* blue line */}
      {/* <Box sx={{
        width:'100%',
        height:'5px',
        backgroundColor:'white',
      }}></Box> */}
      
      <Box sx={{
        width:'100%',
        height:smallscreen? '200%':'90%',
        display:'flex',
        flexDirection:smallscreen? 'column':'row',

      }}>

        <Box sx={{
          width:smallscreen? '100%':'50%',
          height:smallscreen? '100vh':'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'primary.main',
          position:'relative'
        }}>
          

          <HomeSlide smallscreen={smallscreen} />

          {/* <Box sx={{
            width:'80%',
            height:'80%',
            backgroundImage:'url(./images/logo-white.png)',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
          }}>
            
          </Box> */}
          

        </Box>


        <Box sx={{
          width:smallscreen? '100%':'50%',
          height:smallscreen? '100vh':'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}>

          <Box sx={{
            width:'60%',
            height:'80%',
            fontFamily:'raleway',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
          }}>

            <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              fontSize:'calc(20px + 1vw)',
              flexDirection:'column'
            }}>
              <Box sx={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                position:'relative',
              }}>
                <AccessTime sx={{
                  height:'30px',
                  width:'30px',
                  position:'absolute',
                  left:0
                }} />
                Hours
              </Box>
              <img src='./images/scissor-line.png' style={{
                height:'50px'
              }} />
            </Box>

            <Box sx={{
              width:'100%',
              height:'100%',
              
            }}>

              <DayHours day='Monday' hours='10 AM-6:30 PM' />
              <DayHours day='Tuesday' hours='10 AM-6:30 PM' />
              <DayHours day='Wednesday' hours='10 AM-6:30 PM' />
              <DayHours day='Thursday' hours='10 AM-6:30 PM' />
              <DayHours day='Friday' hours='8 AM-7 PM' />
              <DayHours day='Saturday' hours='8 AM-3 PM' />
              <DayHours day='Sunday' hours='Closed' />

            </Box>


            <Box sx={{
              width:'100%',
              height:'70px',
              display:'flex',
              justifyContent:'center',
              
            }}>
              <Button variant='contained' sx={{
                paddingLeft:'5%',
                paddingRight:'5%',
                fontSize:'calc(16px + .4vw)',
                fontFamily:'raleway'
              }}>
                book
              </Button>
            </Box>

          </Box>


        </Box>


      </Box>

      {/* blue line */}
      {/* <Box sx={{
        width:'100%',
        height:'5px',
        backgroundColor:'primary.blue'
      }}></Box> */}


      <Box id='services' sx={{
        width:'100%',
        height:smallscreen? '200%':'100%',
        display:'flex',
        backgroundColor:'primary.main',
        paddingTop:'10px',
        alignItems:'center',
        flexDirection:smallscreen? 'column-reverse':'row'
      }}>

        <Box sx={{
          width:smallscreen? '100%':'50%',
          height:'80%',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
        }}>

          <Box sx={{
            width:'90%',
            height:'25%',
            backgroundImage:'url(./images/logo-white.png)',
            backgroundSize:'contain',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
          }}>

          </Box>

          <Box sx={{
            width:'80%',
            height:'40%',
            fontSize:'calc(16px + .4vw)',
            color:'white',
            fontFamily:'raleway',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop:'5%'
          }}>


            <Typography variant='h4' sx={{
              fontFamily:'raleway',
              display:'flex',
              justifyContent:'center'
            }}>
              Pricing
            </Typography>
            <img src='./images/scissor-line-white.png' style={{
                height:'50px',
                // marginBottom:'10px'
              }} />
            <Box sx={{
              width:'70%',
              height:'40%',
              display:'flex',
              flexDirection:'column'
              // justifyContent:'center'
              // backgroundColor:'teal'
            }}>
              <ServicePrice title='Kids Haircuts' price='20$' />
              <ServicePrice title='Adults Haircuts' price='30-35$' />
            </Box>

          </Box>

        </Box>

        <Box sx={{
          width:smallscreen? '100%':'50%',
          height:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          
        }}>
          
          <Box sx={{
            width:'100%',
            height:'100%',
            backgroundImage:'url(./images/barbor-3.jpg)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
          }}>

          </Box>



        </Box>


      </Box>


      <Booking smallscreen={smallscreen} />


      
    </Box>
  )
}
