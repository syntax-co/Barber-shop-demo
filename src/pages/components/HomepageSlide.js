import { Box, Button } from "@mui/material";
import {ArrowBackIos,ArrowForwardIos} from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Dots = ({count,current}) => {

    const countArray = [...Array(count).keys()]

    

    
    const Dot = ({num}) => {

        return(
            <Box sx={{
                width:'12px',
                height:'12px',
                borderRadius:'15px',
                border:'1px solid white',
                margin:'2%',
                backgroundColor:current==num? 'white':''
            }}></Box>
        )
    }

    return(
        <Box sx={{
            width:'250px',
            height:'50px',
            position:'absolute',
            zIndex:'2',
            display:'flex',
            justifyContent:'center',
            bottom:0
        }}>
            {
                countArray.map((num) => {
                    return <Dot key={`dot-${num}`} num={num} />
                })
            }
        </Box>
    )
}


// var currentdex = 0;

const HomeSlide = ({smallscreen}) => {

    const [leftHover,setLeftHover] = useState(false);
    const [rightHover,setRightHover] = useState(false);
    const [currentdex,setCurrentdex] = useState(0);
    const timing = useRef(null);

    const images=[
        './images/review-1.jpg',
        './images/customer-1-1.jpg',
        './images/customer-2-1.jpg',
        './images/customer-3-1.jpg',
        './images/review-2.jpg'

    ]

    
    
    
   

    const imageForward = () => {
        
        const show = document.querySelector('#slide-image');
        show.className +=' fadeout';
        setTimeout(() => {

            setCurrentdex((prevalue) => {
                if (prevalue+1 == images.length) {
                    
                    show.style.backgroundImage = `url(${images[0]})`;
                    show.classList.remove('fadeout');
                    return 0;
                    
                } else {
                    
                    show.style.backgroundImage = `url(${images[prevalue+1]})`;
                    show.classList.remove('fadeout');
                    return prevalue+1;
                    
                }


            })

           
        }, 500);

        
    }

    const imageBack = () => {
        
        const show = document.querySelector('#slide-image');
        show.className +=' fadeout';

        setTimeout(() => {
            if (currentdex-1 < 0) {
                setCurrentdex(() => {
                    show.style.backgroundImage = `url(${images[images.length-1]})`;
                    show.classList.remove('fadeout');
                    return images.length-1;
                });
            } else {
                setCurrentdex(() => {
                    show.style.backgroundImage = `url(${images[currentdex-1]})`;
                    show.classList.remove('fadeout');
                    return currentdex-1;
                });
            }
        }, 500);


    }



    useEffect(() => {

        timing.current = setInterval(() => {imageForward()}, 6000);


        return () => {
            clearInterval(timing.current);
        }

    },[currentdex])


   
    return(
        <Box sx={{
            width:'95%',
            height:'95%',
            marginX:'auto',
            position:'relative',
            display:'flex',
            justifyContent:'center'
          }}>

        
            <Box id='slide-image' sx={{
                width:'100%',
                height:'100%',
                position:'absolute',
                backgroundImage:` url(${images[currentdex]})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                zIndex:1
            }}>
            </Box>
            
            <Dots count={images.length} current={currentdex} />
            

                
            {/* left arrow */}
            {/* <Box sx={{
                width:'50px',
                height:'100%',
                color:'white',
                position:'absolute',
                left:0

            }}>
                <Box sx={{
                    position:'relative',
                    height:'100%',width:'100%'
                }}>
                <motion.div style={{
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    cursor:'pointer'
                }}
                    
                    animate={{
                        backgroundColor:leftHover? '#20202055':'#20202000'
                    }}
                    onMouseEnter={() => {
                        setLeftHover(true);
                    }}
                    onMouseLeave={() => {
                        setLeftHover(false);
                    }}
                    onClick={() => {
                        imageBack();
                    }}
                >

                    <ArrowForwardIos sx={{
                        width:'40px',
                        height:'40px',
                        display:'flex',
                        justifyContent:'center',
                        transform:'rotate(180deg)',
                        // marginRight:'30%'
                    }} />
                </motion.div>
                
                </Box>

            </Box> */}
            
            
            {/* right arrow */}
            {/* <Box sx={{
                width:'50px',
                height:'100%',
                color:'white',
                position:'absolute',
                right:0

            }}>
                <Box sx={{
                    position:'relative',
                    height:'100%',width:'100%'
                }}>
                <motion.div style={{
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex',
                    cursor:'pointer'
                }}
                    
                    animate={{
                        backgroundColor:rightHover? '#20202055':'#20202000'
                    }}
                    onMouseEnter={() => {
                        setRightHover(true);
                    }}
                    onMouseLeave={() => {
                        setRightHover(false);
                    }}
                    onClick={() => {
                        imageForward();
                    }}
                >

                    <ArrowForwardIos sx={{
                        width:'40px',
                        height:'40px',
                        display:'flex',
                        justifyContent:'center',
                        // marginRight:'30%'
                    }} />
                </motion.div>
                
                </Box>

            </Box> */}


            
        </Box>
    )
}


export default HomeSlide;