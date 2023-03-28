import { useEffect, useState } from "react"

const { Box, Typography, Button } = require("@mui/material")


const Barbor = ({name, booksyLink}) => {
    



    return(
        <Box sx={{
            color:'white',
            width:'100%',
            height:'80px',
            fontSize:'calc(16px + .8vw)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderBottom:'2px solid white',

        }}>

            <Box sx={{
                width:'48%',
                fontFamily:'raleway'
            }}>
                <span style={{
                    fontFamily:'alex-brush',
                    marginRight:'4px'
                }}>
                    {name.slice(0,1)}
                </span>
                {name.slice(1,name.length)}
            </Box>

            <Box sx={{
                width:'48%',
                height:'100%',
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center'
            }}>
                <Button variant='contained' color='themeWhite' 
                sx={{
                    fontFamily:'raleway',
                    height:'50px',
                    color:'black',
                    fontWeight:'bold',
                    paddingX:'6%'
                }}
                >
                    Book
                </Button>
            </Box>
        </Box>
    )
}



const Booking = ({smallscreen}) => {


    return(
        <Box id='book' sx={{
            width:'100%',
            height:smallscreen? '200%':'90vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'primary.main',
            flexDirection:smallscreen? 'column':'row',
            paddingTop:'10px',
        }}>

            <Box sx={{
                width:smallscreen? '100%':'40%',
                height:'100%',
                backgroundImage:'url(./images/barbor-1.jpg)',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
            }}>

            </Box>


            <Box sx={{
                width:'60%',
                height:'80%',
                color:'white',
                fontSize:'calc(15px + 4vw)',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',

            }}>
                

                <Box>
                    <Box sx={{
                        display:'flex',
                        height:'80px',
                        marginBottom:'50px',
                    }}>

                        <img src='./images/plug-white.png' 
                            style={{
                                height: smallscreen? '20%':'100%',
                                width: smallscreen? '20%':'100%',
                                position:'relative',
                                top:'20px',
                                marginRight:'2%'
                            }}
                        />
                        <Box>
                            <span style={{
                                fontFamily:'alex-brush',
                                fontSize:'calc(25px + 4vw)'
                            }}>B</span>arbors
                        </Box>
                        <img src='./images/razor-white.png' 
                            style={{
                                height: smallscreen? '40%':'100%',
                                width: smallscreen? '30%':'100%',
                                position:'relative',
                                marginLeft:'2%'
                            }}
                        />
                    </Box>
                    
                    <Barbor name='Barbor 1' />
                    <Barbor name='Barbor 2' />
                    <Barbor name='Barbor 3' />
                    <Barbor name='Barbor 4' />
                </Box>

            </Box>

        </Box>
    )
}



export default Booking;